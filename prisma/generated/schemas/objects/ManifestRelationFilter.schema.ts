import { z } from 'zod';
import { ManifestWhereInputObjectSchema } from './ManifestWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestRelationFilter> = z
  .object({
    is: z.lazy(() => ManifestWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => ManifestWhereInputObjectSchema).optional(),
  })
  .strict();

export const ManifestRelationFilterObjectSchema = Schema;
