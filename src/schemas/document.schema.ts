import { userSchema } from "./user.schema";
import { sectionSchema } from "./section.schema";
import { z } from "zod";

export const documentInputSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const documentEditSchema = documentInputSchema.extend({
  id: z.string(),
});

export const documentUpdateSchema = z.object({
  id: z.string(),
  updatedAt: z.date(),
  user: userSchema,
});

export type Document = {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  sections: {
    questions: {
      Option: { id: string; description: string }[];
      Extensions: { id: string; description: string }[];
      type: string;
      id: string;
      description: string;
      help: string | null;
    }[];
    id: string;
    name: string;
    description: string;
  }[];
};

export type DocumentInput = z.infer<typeof documentInputSchema>;
export type DocumentEdit = z.infer<typeof documentEditSchema>;
