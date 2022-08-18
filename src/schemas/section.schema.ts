import { questionSchema } from "./question.schema";
import { z } from "zod";

export const sectionSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  questions: z.array(questionSchema),
});
