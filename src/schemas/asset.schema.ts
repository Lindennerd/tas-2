import { z } from "zod";

export const assetInputSchema = z.object({
  name: z.string(),
  description: z.string(),
  url: z.string().url().optional().or(z.literal("")),
});

export const assetEditSchema = assetInputSchema.extend({
  id: z.string(),
});

export type Asset = {
  AssetUpdate: {
    user: { id: string; name: string | null; email: string | null };
    id: string;
    updatedAt: Date;
  }[];
  user: { id: string; name: string | null; email: string | null };
  id: string;
  name: string;
  description: string;
  url: string | null;
  createdAt: Date;
};

export type AssetInput = z.infer<typeof assetInputSchema>;
export type AssetEdit = z.infer<typeof assetEditSchema>;
