import { z } from 'zod';
import { AssetWhereInputObjectSchema } from './AssetWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetListRelationFilter> = z
  .object({
    every: z.lazy(() => AssetWhereInputObjectSchema).optional(),
    some: z.lazy(() => AssetWhereInputObjectSchema).optional(),
    none: z.lazy(() => AssetWhereInputObjectSchema).optional(),
  })
  .strict();

export const AssetListRelationFilterObjectSchema = Schema;
