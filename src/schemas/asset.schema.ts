import { z } from "zod";

export const assetInputSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string().url().nullable(),
});

export type AssetInput = z.infer<typeof assetInputSchema>;
