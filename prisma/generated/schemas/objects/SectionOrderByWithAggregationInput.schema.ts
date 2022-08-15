import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SectionCountOrderByAggregateInputObjectSchema } from './SectionCountOrderByAggregateInput.schema';
import { SectionMaxOrderByAggregateInputObjectSchema } from './SectionMaxOrderByAggregateInput.schema';
import { SectionMinOrderByAggregateInputObjectSchema } from './SectionMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    manifestId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SectionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => SectionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SectionMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const SectionOrderByWithAggregationInputObjectSchema = Schema;
