import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AssetCountOrderByAggregateInputObjectSchema } from './AssetCountOrderByAggregateInput.schema';
import { AssetMaxOrderByAggregateInputObjectSchema } from './AssetMaxOrderByAggregateInput.schema';
import { AssetMinOrderByAggregateInputObjectSchema } from './AssetMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AssetCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => AssetMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AssetMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const AssetOrderByWithAggregationInputObjectSchema = Schema;
