import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateUncheckedCreateWithoutAssetInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const AssetUpdateUncheckedCreateWithoutAssetInputObjectSchema = Schema;
