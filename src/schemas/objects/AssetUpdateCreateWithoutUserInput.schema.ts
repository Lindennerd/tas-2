import { z } from 'zod';
import { AssetCreateNestedOneWithoutAssetUpdateInputObjectSchema } from './AssetCreateNestedOneWithoutAssetUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    asset: z.lazy(
      () => AssetCreateNestedOneWithoutAssetUpdateInputObjectSchema,
    ),
    updatedAt: z.date().optional(),
  })
  .strict();

export const AssetUpdateCreateWithoutUserInputObjectSchema = Schema;
