import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    assetId: z.string(),
    userId: z.string(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const AssetUpdateUncheckedCreateInputObjectSchema = Schema;
