import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AnswerOrderByWithRelationInputObjectSchema } from './AnswerOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional(),
    answer: z.lazy(() => AnswerOrderByWithRelationInputObjectSchema).optional(),
    answerId: z.lazy(() => SortOrderSchema).optional(),
    approved: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const CommentOrderByWithRelationInputObjectSchema = Schema;
