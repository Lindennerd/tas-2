import { extensionSchema } from "./extension.schema";
import { optionSchema } from "./option.schema";
import { inferQueryOutput } from "@/utils/trpc";
import { z } from "zod";

export const questionSchema = z.object({
  id: z.string(),
  description: z.string(),
  type: z.string(),
  weight: z.number(),
  options: z.array(optionSchema),
  extensions: z.array(extensionSchema),
});

export const questionInputSchema = z.object({
  description: z.string(),
  type: z.string(),
  weight: z.number(),
  help: z.string(),
  sectionId: z.string(),
});

export const questionUpdateSchema = questionInputSchema.extend({
  id: z.string(),
});

export enum QuestionType {
  text = "Texto",
  multipleChoice = "Múltipla escolha",
  file = "Arquivo",
}

export type QuestionOutput = inferQueryOutput<"questions.findOne">;
export type QuestionInput = z.TypeOf<typeof questionInputSchema>;
export type QuestionUpdate = z.TypeOf<typeof questionUpdateSchema>;
