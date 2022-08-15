import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.string().optional(),
      manifestId: z.string(),
      updatedAt: z.date().optional(),
    })
    .strict();

export const ManifestUpdateUncheckedCreateWithoutUserInputObjectSchema = Schema;
