import { inferQueryOutput } from "@/utils/trpc";
import { z } from "zod";

export const manifestInputSchema = z.object({
  id: z.string(),
});

export type ManifestOutput = inferQueryOutput<"manifest.findFirst">;
