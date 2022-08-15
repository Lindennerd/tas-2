import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OptionUncheckedCreateWithoutQuestionInput> = z
  .object({
    id: z.string().optional(),
    help: z.string().optional().nullable(),
    description: z.string(),
    default: z.boolean().optional(),
  })
  .strict();

export const OptionUncheckedCreateWithoutQuestionInputObjectSchema = Schema;