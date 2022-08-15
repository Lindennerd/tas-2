import { z } from 'zod';
import { AssetUpdateWithoutAssetUpdateInputObjectSchema } from './AssetUpdateWithoutAssetUpdateInput.schema';
import { AssetUncheckedUpdateWithoutAssetUpdateInputObjectSchema } from './AssetUncheckedUpdateWithoutAssetUpdateInput.schema';
import { AssetCreateWithoutAssetUpdateInputObjectSchema } from './AssetCreateWithoutAssetUpdateInput.schema';
import { AssetUncheckedCreateWithoutAssetUpdateInputObjectSchema } from './AssetUncheckedCreateWithoutAssetUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpsertWithoutAssetUpdateInput> = z
  .object({
    update: z.union([
      z.lazy(() => AssetUpdateWithoutAssetUpdateInputObjectSchema),
      z.lazy(() => AssetUncheckedUpdateWithoutAssetUpdateInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AssetCreateWithoutAssetUpdateInputObjectSchema),
      z.lazy(() => AssetUncheckedCreateWithoutAssetUpdateInputObjectSchema),
    ]),
  })
  .strict();

export const AssetUpsertWithoutAssetUpdateInputObjectSchema = Schema;
