import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUncheckedCreateWithoutAnswerInput> = z
  .object({
    id: z.string().optional(),
    description: z.string(),
    help: z.string().optional().nullable(),
    type: z.string(),
    weight: z.number(),
    sectionId: z.string().optional().nullable(),
  })
  .strict();

export const QuestionUncheckedCreateWithoutAnswerInputObjectSchema = Schema;
