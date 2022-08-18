import { z } from "zod";

export const optionSchema = z.object({
  id: z.string(),
  description: z.string(),
  help: z.string(),
});
