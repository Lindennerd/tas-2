import { questionInputSchema } from "./../../schemas/question.schema";
import { createRouter } from "../context/context";
import * as trpc from "@trpc/server";
import { z } from "zod";

const questionSelect = {
  id: true,
  description: true,
  type: true,
  weight: true,
  help: true,
  sectionId: true,
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
};

export const questionsRouter = createRouter()
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
      return await ctx.prisma.question.findMany({
        where: { description: { contains: input.filter } },
      });
    },
  })
  .query("findManyBySection", {
    input: z.object({
      section: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.question.findMany({
        where: { sectionId: input.section },
        select: questionSelect,
      });
    },
  })
  .mutation("create", {
    input: questionInputSchema,
    async resolve({ ctx, input }) {
      return await ctx.prisma.question.create({
        data: input,
      });
    },
  });
