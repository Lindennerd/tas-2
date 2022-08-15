import { z } from 'zod';
import { AnswerCreateNestedOneWithoutCommentInputObjectSchema } from './AnswerCreateNestedOneWithoutCommentInput.schema';
import { UserCreateNestedOneWithoutCommentInputObjectSchema } from './UserCreateNestedOneWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateInput> = z
  .object({
    id: z.string().optional(),
    value: z.string(),
    answer: z.lazy(() => AnswerCreateNestedOneWithoutCommentInputObjectSchema),
    approved: z.boolean().optional(),
    createdAt: z.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutCommentInputObjectSchema),
  })
  .strict();

export const CommentCreateInputObjectSchema = Schema;
