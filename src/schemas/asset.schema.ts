import { z } from "zod";
import { inferQueryOutput } from "@/utils/trpc";

export const assetInputSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string().url().optional().or(z.literal("")),
});

export const assetEditSchema = assetInputSchema.extend({
  id: z.string(),
});

export type AssetInput = z.infer<typeof assetInputSchema>;
export type AssetEdit = z.infer<typeof assetEditSchema>;
export type AssetOutput = inferQueryOutput<"assets.findFirst">;
