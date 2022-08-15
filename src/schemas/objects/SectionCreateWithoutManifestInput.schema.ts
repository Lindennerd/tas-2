import { z } from 'zod';
import { QuestionCreateNestedManyWithoutSectionInputObjectSchema } from './QuestionCreateNestedManyWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionCreateWithoutManifestInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    questions: z
      .lazy(() => QuestionCreateNestedManyWithoutSectionInputObjectSchema)
      .optional(),
  })
  .strict();

export const SectionCreateWithoutManifestInputObjectSchema = Schema;
