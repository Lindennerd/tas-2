import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExtensionsCountOrderByAggregateInputObjectSchema } from './ExtensionsCountOrderByAggregateInput.schema';
import { ExtensionsMaxOrderByAggregateInputObjectSchema } from './ExtensionsMaxOrderByAggregateInput.schema';
import { ExtensionsMinOrderByAggregateInputObjectSchema } from './ExtensionsMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExtensionsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    default: z.lazy(() => SortOrderSchema).optional(),
    questionId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ExtensionsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ExtensionsMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ExtensionsMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ExtensionsOrderByWithAggregationInputObjectSchema = Schema;
