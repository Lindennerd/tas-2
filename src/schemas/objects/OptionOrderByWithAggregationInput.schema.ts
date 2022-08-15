import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OptionCountOrderByAggregateInputObjectSchema } from './OptionCountOrderByAggregateInput.schema';
import { OptionMaxOrderByAggregateInputObjectSchema } from './OptionMaxOrderByAggregateInput.schema';
import { OptionMinOrderByAggregateInputObjectSchema } from './OptionMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OptionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    help: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    default: z.lazy(() => SortOrderSchema).optional(),
    questionId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => OptionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => OptionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => OptionMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const OptionOrderByWithAggregationInputObjectSchema = Schema;
