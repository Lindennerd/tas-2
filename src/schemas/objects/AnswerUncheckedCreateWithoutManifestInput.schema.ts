import { z } from 'zod';
import { CommentUncheckedCreateNestedManyWithoutAnswerInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUncheckedCreateWithoutManifestInput> = z
  .object({
    id: z.string().optional(),
    value: z.string(),
    questionId: z.string(),
    createdAt: z.date().optional(),
    userId: z.string(),
    Comment: z
      .lazy(
        () => CommentUncheckedCreateNestedManyWithoutAnswerInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AnswerUncheckedCreateWithoutManifestInputObjectSchema = Schema;
