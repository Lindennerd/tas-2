import { questionSchema } from "./question.schema";
import { z } from "zod";

export const sectionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  questions: z.array(questionSchema),
});

export const sectionInputSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const sectionEditSchema = sectionInputSchema.extend({
  id: z.string(),
});

export type Section = z.infer<typeof sectionSchema>;
