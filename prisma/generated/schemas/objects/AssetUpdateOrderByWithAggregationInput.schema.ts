import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AssetUpdateCountOrderByAggregateInputObjectSchema } from './AssetUpdateCountOrderByAggregateInput.schema';
import { AssetUpdateMaxOrderByAggregateInputObjectSchema } from './AssetUpdateMaxOrderByAggregateInput.schema';
import { AssetUpdateMinOrderByAggregateInputObjectSchema } from './AssetUpdateMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    assetId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AssetUpdateCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => AssetUpdateMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => AssetUpdateMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const AssetUpdateOrderByWithAggregationInputObjectSchema = Schema;
