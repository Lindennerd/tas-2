import { z } from 'zod';
import { ManifestUpdateWhereInputObjectSchema } from './ManifestUpdateWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateListRelationFilter> = z
  .object({
    every: z.lazy(() => ManifestUpdateWhereInputObjectSchema).optional(),
    some: z.lazy(() => ManifestUpdateWhereInputObjectSchema).optional(),
    none: z.lazy(() => ManifestUpdateWhereInputObjectSchema).optional(),
  })
  .strict();

export const ManifestUpdateListRelationFilterObjectSchema = Schema;
