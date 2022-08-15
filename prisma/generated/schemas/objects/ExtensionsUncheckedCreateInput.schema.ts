import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExtensionsUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    description: z.string(),
    default: z.boolean().optional(),
    questionId: z.string(),
  })
  .strict();

export const ExtensionsUncheckedCreateInputObjectSchema = Schema;
