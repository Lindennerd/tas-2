import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AssetOrderByWithRelationInputObjectSchema } from './AssetOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    asset: z.lazy(() => AssetOrderByWithRelationInputObjectSchema).optional(),
    assetId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const AssetUpdateOrderByWithRelationInputObjectSchema = Schema;
