import { z } from 'zod';
import { ManifestCreateNestedOneWithoutSectionsInputObjectSchema } from './ManifestCreateNestedOneWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionCreateWithoutQuestionsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    Manifest: z
      .lazy(() => ManifestCreateNestedOneWithoutSectionsInputObjectSchema)
      .optional(),
  })
  .strict();

export const SectionCreateWithoutQuestionsInputObjectSchema = Schema;
