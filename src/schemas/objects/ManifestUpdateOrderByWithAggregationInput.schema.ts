import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ManifestUpdateCountOrderByAggregateInputObjectSchema } from './ManifestUpdateCountOrderByAggregateInput.schema';
import { ManifestUpdateMaxOrderByAggregateInputObjectSchema } from './ManifestUpdateMaxOrderByAggregateInput.schema';
import { ManifestUpdateMinOrderByAggregateInputObjectSchema } from './ManifestUpdateMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    manifestId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ManifestUpdateCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ManifestUpdateMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ManifestUpdateMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ManifestUpdateOrderByWithAggregationInputObjectSchema = Schema;
