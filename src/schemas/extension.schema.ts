import { z } from "zod";

export const extensionSchema = z.object({
  id: z.string(),
  description: z.string(),
});
