import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExtensionsUncheckedCreateWithoutQuestionInput> =
  z
    .object({
      id: z.string().optional(),
      description: z.string(),
      default: z.boolean().optional(),
    })
    .strict();

export const ExtensionsUncheckedCreateWithoutQuestionInputObjectSchema = Schema;
