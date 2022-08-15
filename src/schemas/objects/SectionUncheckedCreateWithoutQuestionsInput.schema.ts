import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionUncheckedCreateWithoutQuestionsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    manifestId: z.string().optional().nullable(),
  })
  .strict();

export const SectionUncheckedCreateWithoutQuestionsInputObjectSchema = Schema;
