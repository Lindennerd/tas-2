import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    manifestId: z.string(),
    userId: z.string(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const ManifestUpdateUncheckedCreateInputObjectSchema = Schema;
