import { z } from 'zod';
import { ManifestWhereInputObjectSchema } from './ManifestWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestListRelationFilter> = z
  .object({
    every: z.lazy(() => ManifestWhereInputObjectSchema).optional(),
    some: z.lazy(() => ManifestWhereInputObjectSchema).optional(),
    none: z.lazy(() => ManifestWhereInputObjectSchema).optional(),
  })
  .strict();

export const ManifestListRelationFilterObjectSchema = Schema;
