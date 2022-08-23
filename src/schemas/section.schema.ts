import { inferQueryOutput } from "./../utils/trpc";
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
  required: z.boolean(),
});

export const sectionEditSchema = sectionInputSchema.extend({
  id: z.string(),
});

export type SectionInput = z.infer<typeof sectionInputSchema>;
export type SectionOutput = inferQueryOutput<"sections.findFirst">;
