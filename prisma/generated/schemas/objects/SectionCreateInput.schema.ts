import { z } from 'zod';
import { QuestionCreateNestedManyWithoutSectionInputObjectSchema } from './QuestionCreateNestedManyWithoutSectionInput.schema';
import { ManifestCreateNestedOneWithoutSectionsInputObjectSchema } from './ManifestCreateNestedOneWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    questions: z
      .lazy(() => QuestionCreateNestedManyWithoutSectionInputObjectSchema)
      .optional(),
    Manifest: z
      .lazy(() => ManifestCreateNestedOneWithoutSectionsInputObjectSchema)
      .optional(),
  })
  .strict();

export const SectionCreateInputObjectSchema = Schema;
