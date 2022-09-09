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
      type: true,
      weight: true,
      help: true,
      sectionId: true,
      Answer: {
        select: {
          id: true,
          questionId: true,
          value: true,
        },
      },
      Option: {
        select: {
          id: true,
          default: true,
          description: true,
          questionId: true,
        },
      },
      Extensions: {
        select: {
          id: true,
          default: true,
          description: true,
          questionId: true,
        },
      },
    },
  },
};

const PAGE_SIZE = 10;

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
      page: z.number().default(0),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.section.findMany({
        take: PAGE_SIZE,
        skip: PAGE_SIZE * input.page,
        where: { name: { contains: input.filter } },
        select: sectionSelect,
        orderBy: { name: "asc" },
      });
    },
  })
  .query("findAllOptionals", {
    async resolve({ ctx }) {
      return await ctx.prisma.section.findMany({
        where: { required: false },
        select: {
          id: true,
          name: true,
        },
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
  })
  .mutation("delete", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.prisma.section.delete({
        where: { id: input },
      });
    },
  });
