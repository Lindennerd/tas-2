import {
  documentInputSchema,
  documentEditSchema,
  Document,
} from "./../../schemas/document.schema";
import { createRouter } from "../context/context";
import * as trpc from "@trpc/server";
import { z } from "zod";

const documentSelect = {
  id: true,
  name: true,
  description: true,
  createdAt: true,
  sections: {
    select: {
      id: true,
      name: true,
      description: true,
      questions: {
        select: {
          id: true,
          description: true,
          help: true,
          type: true,
          Option: {
            select: {
              id: true,
              description: true,
            },
          },
          Extensions: {
            select: {
              id: true,
              description: true,
            },
          },
        },
      },
    },
    DocumentUpdate: {
      select: {
        id: true,
        updatedAt: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    },
  },
};

export const documentRouter = createRouter()
  .middleware(({ ctx, next }) => {
    if (!ctx.session || !ctx.session.user) {
      throw new trpc.TRPCError({ code: "UNAUTHORIZED" });
    }
    return next({
      ctx: {
        ...ctx,
        session: { ...ctx.session, user: ctx.session.user },
      },
    });
  })
  .query("findMany", {
    input: z.object({ filter: z.string() }),
    async resolve({ ctx, input }): Promise<Document[]> {
      return ctx.prisma.document.findMany({
        where: {
          name: {
            contains: input.filter,
          },
        },
        select: documentSelect,
      });
    },
  })
  .query("findOne", {
    input: z.object({ id: z.string() }),
    async resolve({ ctx, input }): Promise<Document | null> {
      return ctx.prisma.document.findFirst({
        where: {
          id: input.id,
        },
        select: documentSelect,
      });
    },
  })
  .mutation("create", {
    input: documentInputSchema,
    async resolve({ ctx, input }) {
      return ctx.prisma.document.create({
        data: { ...input, creator: { connect: { id: ctx.session.user.id } } },
      });
    },
  })
  .mutation("edit", {
    input: documentEditSchema,
    async resolve({ ctx, input }) {
      const editted = await ctx.prisma.document.update({
        where: { id: input.id },
        data: { ...input },
      });

      await ctx.prisma.documentUpdate.create({
        data: {
          document: { connect: { id: editted.id } },
          user: { connect: { id: ctx.session.user.id } },
        },
      });

      return editted;
    },
  });
