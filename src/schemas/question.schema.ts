import { extensionSchema } from "./extension.schema";
import { optionSchema } from "./option.schema";
import { z } from "zod";
import { inferQueryOutput } from "@/utils/trpc";

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

export enum QuestionType {
  text = "Texto",
  multipleChoice = "Múltipla escolha",
  file = "Arquivo",
}

export type Question = inferQueryOutput<"questions.findOne">;
