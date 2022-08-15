import { z } from 'zod';
import { AssetCreateWithoutAssetUpdateInputObjectSchema } from './AssetCreateWithoutAssetUpdateInput.schema';
import { AssetUncheckedCreateWithoutAssetUpdateInputObjectSchema } from './AssetUncheckedCreateWithoutAssetUpdateInput.schema';
import { AssetCreateOrConnectWithoutAssetUpdateInputObjectSchema } from './AssetCreateOrConnectWithoutAssetUpdateInput.schema';
import { AssetUpsertWithoutAssetUpdateInputObjectSchema } from './AssetUpsertWithoutAssetUpdateInput.schema';
import { AssetWhereUniqueInputObjectSchema } from './AssetWhereUniqueInput.schema';
import { AssetUpdateWithoutAssetUpdateInputObjectSchema } from './AssetUpdateWithoutAssetUpdateInput.schema';
import { AssetUncheckedUpdateWithoutAssetUpdateInputObjectSchema } from './AssetUncheckedUpdateWithoutAssetUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateOneRequiredWithoutAssetUpdateNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => AssetCreateWithoutAssetUpdateInputObjectSchema),
          z.lazy(() => AssetUncheckedCreateWithoutAssetUpdateInputObjectSchema),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => AssetCreateOrConnectWithoutAssetUpdateInputObjectSchema)
        .optional(),
    }),
    z.object({
      upsert: z
        .lazy(() => AssetUpsertWithoutAssetUpdateInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => AssetWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => AssetUpdateWithoutAssetUpdateInputObjectSchema),
          z.lazy(() => AssetUncheckedUpdateWithoutAssetUpdateInputObjectSchema),
        ])
        .optional(),
    }),
  ]);

export const AssetUpdateOneRequiredWithoutAssetUpdateNestedInputObjectSchema =
  Schema;
