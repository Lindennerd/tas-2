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
