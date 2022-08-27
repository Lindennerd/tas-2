import { z } from "zod";

export const optionSchema = z.object({
  description: z.string(),
  default: z.boolean(),
});

export const optionInputSchema = optionSchema.extend({
  questionId: z.string(),
});

export const optionEditSchema = optionInputSchema.extend({
  id: z.string(),
});

export type Option = z.infer<typeof optionEditSchema>;
export type OptionInput = z.infer<typeof optionInputSchema>;
