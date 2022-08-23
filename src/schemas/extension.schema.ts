import { inferQueryOutput } from "@/utils/trpc";
import { string, z } from "zod";

export const extensionSchema = z.object({
  id: z.string(),
  description: z.string(),
});

export const extensionInputSchema = z.object({
  description: z.string(),
  questionId: z.string(),
});

export const extensionUpdateSchema = extensionInputSchema.extend({
  id: string(),
});

export type ExtensionInput = z.infer<typeof extensionInputSchema>;
export type ExtensionOutput = inferQueryOutput<"extensions.findFirst">;
