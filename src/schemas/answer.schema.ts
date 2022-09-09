import { inferQueryOutput } from "@/utils/trpc";
import { z } from "zod";

export const answerInputSchema = z.object({
  value: z.string(),
  questionId: z.string(),
  manifestId: z.string(),
});

export const answerUpdateSchema = answerInputSchema.extend({
  id: z.string().nullish(),
});

export type AnswerInput = z.TypeOf<typeof answerInputSchema>;
export type AnswerUpdate = z.TypeOf<typeof answerUpdateSchema>;
export type Answer = inferQueryOutput<"answers.findFirst">;
