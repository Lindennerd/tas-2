import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AnswerCountOrderByAggregateInputObjectSchema } from './AnswerCountOrderByAggregateInput.schema';
import { AnswerMaxOrderByAggregateInputObjectSchema } from './AnswerMaxOrderByAggregateInput.schema';
import { AnswerMinOrderByAggregateInputObjectSchema } from './AnswerMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    questionId: z.lazy(() => SortOrderSchema).optional(),
    manifestId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AnswerCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => AnswerMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AnswerMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const AnswerOrderByWithAggregationInputObjectSchema = Schema;
