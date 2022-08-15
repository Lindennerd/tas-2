import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { QuestionListRelationFilterObjectSchema } from './QuestionListRelationFilter.schema';
import { ManifestRelationFilterObjectSchema } from './ManifestRelationFilter.schema';
import { ManifestWhereInputObjectSchema } from './ManifestWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SectionWhereInputObjectSchema),
        z.lazy(() => SectionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SectionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SectionWhereInputObjectSchema),
        z.lazy(() => SectionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    questions: z.lazy(() => QuestionListRelationFilterObjectSchema).optional(),
    Manifest: z
      .union([
        z.lazy(() => ManifestRelationFilterObjectSchema),
        z.lazy(() => ManifestWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    manifestId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const SectionWhereInputObjectSchema = Schema;
