import { z } from 'zod';
import { UserCreateNestedOneWithoutCommentInputObjectSchema } from './UserCreateNestedOneWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateWithoutAnswerInput> = z
  .object({
    id: z.string().optional(),
    value: z.string(),
    approved: z.boolean().optional(),
    createdAt: z.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutCommentInputObjectSchema),
  })
  .strict();

export const CommentCreateWithoutAnswerInputObjectSchema = Schema;
