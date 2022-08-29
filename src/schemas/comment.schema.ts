import { inferQueryOutput } from "@/utils/trpc";
import { z } from "zod";

export const commentInputSchema = z.object({
  value: z.string(),
  questionId: z.string(),
});

export const commentUpdateSchema = commentInputSchema.extend({
  id: z.string(),
  approved: z.boolean(),
});
export type Comment = inferQueryOutput<"comments.findFirst">;
export type CommentInput = z.TypeOf<typeof commentInputSchema>;
export type CommentUpdate = z.TypeOf<typeof commentUpdateSchema>;
