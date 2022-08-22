import { extensionSchema } from "./extension.schema";
import { optionSchema } from "./option.schema";
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

export enum QuestionType {
  text = "Texto",
  multipleChoice = "Múltipla escolha",
  file = "Arquivo",
}

export type Question = {
  description: string;
  type: string;
  id: string;
  Option: {
    description: string;
    id: string;
    default: boolean;
    questionId: string;
  }[];
  Extensions: {
    description: string;
    id: string;
    default: boolean;
    questionId: string;
  }[];
  help: string | null;
  weight: number;
  sectionId: string | null;
};
