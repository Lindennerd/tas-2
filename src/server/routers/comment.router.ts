import { TRPCError } from "@trpc/server";
import z from "zod";
import { createRouter } from "../context/context";
export const commentRouter = createRouter()
  .query("findFirst", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return ctx.prisma.comment.findFirst({
        where: { id: input },
      });
    },
  })
  .mutation("create", {
    input: z.object({
      comment: z.string(),
      questionId: z.string(),
      manifestId: z.string(),
    }),
    async resolve({ ctx, input }) {
      if (!ctx.session || !ctx.session.user) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Você não possui permissão para fazer isso",
        });
      } else {
        return await ctx.prisma.comment.create({
          data: {
            value: input.comment,
            userId: ctx.session?.user.id,
            questionId: input.questionId,
            manifestId: input.manifestId,
          },
        });
      }
    },
  });
