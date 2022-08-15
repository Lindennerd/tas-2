import { z } from 'zod';
import { AssetWhereInputObjectSchema } from './AssetWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetRelationFilter> = z
  .object({
    is: z.lazy(() => AssetWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => AssetWhereInputObjectSchema).optional(),
  })
  .strict();

export const AssetRelationFilterObjectSchema = Schema;
