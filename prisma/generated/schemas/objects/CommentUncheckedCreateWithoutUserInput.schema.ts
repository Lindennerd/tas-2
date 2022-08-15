import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    value: z.string(),
    answerId: z.string(),
    approved: z.boolean().optional(),
    createdAt: z.date().optional(),
  })
  .strict();

export const CommentUncheckedCreateWithoutUserInputObjectSchema = Schema;
