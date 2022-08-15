import { z } from 'zod';
import { CommentUncheckedCreateNestedManyWithoutAnswerInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    value: z.string(),
    questionId: z.string(),
    manifestId: z.string(),
    createdAt: z.date().optional(),
    Comment: z
      .lazy(
        () => CommentUncheckedCreateNestedManyWithoutAnswerInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AnswerUncheckedCreateWithoutUserInputObjectSchema = Schema;
