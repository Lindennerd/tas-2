import { z } from 'zod';
import { AnswerCreateNestedOneWithoutCommentInputObjectSchema } from './AnswerCreateNestedOneWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    value: z.string(),
    answer: z.lazy(() => AnswerCreateNestedOneWithoutCommentInputObjectSchema),
    approved: z.boolean().optional(),
    createdAt: z.date().optional(),
  })
  .strict();

export const CommentCreateWithoutUserInputObjectSchema = Schema;
