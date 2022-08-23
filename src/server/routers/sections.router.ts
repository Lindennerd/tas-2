import {
  sectionEditSchema,
  sectionInputSchema,
  sectionSchema,
} from "./../../schemas/section.schema";
import * as trpc from "@trpc/server";
import { z } from "zod";
import { createRouter } from "./../context/context";

const sectionSelect = {
  id: true,
  name: true,
  description: true,
  required: true,
  questions: {
    select: {
      id: true,
      description: true,
      help: true,
      type: true,
      weight: true,
      Option: {
        select: {
          id: true,
          description: true,
          default: true,
        },
      },
      Extensions: {
        select: {
          id: true,
          description: true,
          default: true,
        },
      },
    },
  },
};

export const sectionsRouter = createRouter()
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
    input: z.object({
      filter: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.section.findMany({
        where: { name: { contains: input.filter } },
        select: sectionSelect,
      });
    },
  })
  .query("findFirst", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.prisma.section.findFirst({
        where: { id: input },
        select: sectionSelect,
      });
    },
  })
  .mutation("create", {
    input: sectionInputSchema,
    async resolve({ ctx, input }) {
      return await ctx.prisma.section.create({
        data: input,
        select: sectionSelect,
      });
    },
  })
  .mutation("update", {
    input: sectionEditSchema,
    async resolve({ ctx, input }) {
      return await ctx.prisma.section.update({
        where: { id: input.id },
        data: {
          name: input.name,
          description: input.description,
        },
        select: sectionSelect,
      });
    },
  });
