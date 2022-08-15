import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionAvgOrderByAggregateInput> = z
  .object({
    weight: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const QuestionAvgOrderByAggregateInputObjectSchema = Schema;
