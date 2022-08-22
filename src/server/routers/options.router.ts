import { createRouter } from "../context/context";
import * as trpc from "@trpc/server";
import { z } from "zod";
import { optionInputSchema } from "@/schemas/option.schema";

export const optionsRouter = createRouter()
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
      questionId: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.option.findMany({
        where: { questionId: input.questionId },
      });
    },
  })
  .mutation("create", {
    input: optionInputSchema,
    async resolve({ ctx, input }) {
      return await ctx.prisma.option.create({
        data: input,
      });
    },
  })
  .mutation("delete", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.option.delete({
        where: { id: input.id },
      });
    },
  });
