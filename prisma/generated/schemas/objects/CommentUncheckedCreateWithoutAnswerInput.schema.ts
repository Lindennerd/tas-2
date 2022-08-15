import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedCreateWithoutAnswerInput> = z
  .object({
    id: z.string().optional(),
    value: z.string(),
    approved: z.boolean().optional(),
    createdAt: z.date().optional(),
    userId: z.string(),
  })
  .strict();

export const CommentUncheckedCreateWithoutAnswerInputObjectSchema = Schema;
