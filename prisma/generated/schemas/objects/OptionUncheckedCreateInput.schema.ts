import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OptionUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    help: z.string().optional().nullable(),
    description: z.string(),
    default: z.boolean().optional(),
    questionId: z.string(),
  })
  .strict();

export const OptionUncheckedCreateInputObjectSchema = Schema;
