import { inferQueryOutput } from "@/utils/trpc";
import { z } from "zod";

const answerInputSchema = z.object({
  value: z.string(),
  questionId: z.string(),
  manifestId: z.string(),
});

const answerUpdateSchema = answerInputSchema.extend({
  id: z.string(),
});

export type AnswerInput = z.TypeOf<typeof answerInputSchema>;
export type AnswerUpdate = z.TypeOf<typeof answerUpdateSchema>;
export type Answer = inferQueryOutput<"answers.findFirst">;
