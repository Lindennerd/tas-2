import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ManifestCountOrderByAggregateInputObjectSchema } from './ManifestCountOrderByAggregateInput.schema';
import { ManifestMaxOrderByAggregateInputObjectSchema } from './ManifestMaxOrderByAggregateInput.schema';
import { ManifestMinOrderByAggregateInputObjectSchema } from './ManifestMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    assetId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ManifestCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ManifestMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ManifestMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ManifestOrderByWithAggregationInputObjectSchema = Schema;
