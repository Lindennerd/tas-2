import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUncheckedCreateWithoutCommentInput> = z
  .object({
    id: z.string().optional(),
    value: z.string(),
    questionId: z.string(),
    manifestId: z.string(),
    createdAt: z.date().optional(),
    userId: z.string(),
  })
  .strict();

export const AnswerUncheckedCreateWithoutCommentInputObjectSchema = Schema;
