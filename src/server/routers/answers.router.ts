import {
  answerInputSchema,
  answerUpdateSchema,
} from "./../../schemas/answer.schema";
import { z } from "zod";
import { createRouter } from "./../context/context";
export const answersRouter = createRouter()
  .query("findFirst", {
    input: z.object({
      questionId: z.string(),
      manifestId: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.answer.findFirst({
        where: {
          AND: { questionId: input.questionId, manifestId: input.manifestId },
        },
      });
    },
  })
  .mutation("createMany", {
    input: z.array(answerUpdateSchema),
    async resolve({ ctx, input }) {
      input.forEach(async (answer) => {
        return await ctx.prisma.answer.upsert({
          where: { id: answer.id },
          update: {
            questionId: answer.questionId,
            value: answer.value,
            manifestId: answer.manifestId,
          },
          create: {
            questionId: answer.questionId,
            value: answer.value,
            manifestId: answer.manifestId,
            userId: ctx.session?.user!.id!,
          },
        });
      });
    },
  });
