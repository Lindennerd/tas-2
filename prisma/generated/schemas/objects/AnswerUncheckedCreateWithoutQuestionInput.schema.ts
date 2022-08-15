import { z } from 'zod';
import { CommentUncheckedCreateNestedManyWithoutAnswerInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUncheckedCreateWithoutQuestionInput> = z
  .object({
    id: z.string().optional(),
    value: z.string(),
    manifestId: z.string(),
    createdAt: z.date().optional(),
    userId: z.string(),
    Comment: z
      .lazy(
        () => CommentUncheckedCreateNestedManyWithoutAnswerInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AnswerUncheckedCreateWithoutQuestionInputObjectSchema = Schema;
