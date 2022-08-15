import { z } from 'zod';
import { AssetUpdateWhereInputObjectSchema } from './AssetUpdateWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateListRelationFilter> = z
  .object({
    every: z.lazy(() => AssetUpdateWhereInputObjectSchema).optional(),
    some: z.lazy(() => AssetUpdateWhereInputObjectSchema).optional(),
    none: z.lazy(() => AssetUpdateWhereInputObjectSchema).optional(),
  })
  .strict();

export const AssetUpdateListRelationFilterObjectSchema = Schema;
