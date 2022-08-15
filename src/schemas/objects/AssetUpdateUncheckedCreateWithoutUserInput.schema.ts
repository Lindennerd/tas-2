import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    assetId: z.string(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const AssetUpdateUncheckedCreateWithoutUserInputObjectSchema = Schema;
