import { z } from 'zod';
import { AssetCreateWithoutAssetUpdateInputObjectSchema } from './AssetCreateWithoutAssetUpdateInput.schema';
import { AssetUncheckedCreateWithoutAssetUpdateInputObjectSchema } from './AssetUncheckedCreateWithoutAssetUpdateInput.schema';
import { AssetCreateOrConnectWithoutAssetUpdateInputObjectSchema } from './AssetCreateOrConnectWithoutAssetUpdateInput.schema';
import { AssetWhereUniqueInputObjectSchema } from './AssetWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetCreateNestedOneWithoutAssetUpdateInput> =
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
      connect: z.lazy(() => AssetWhereUniqueInputObjectSchema).optional(),
    }),
  ]);

export const AssetCreateNestedOneWithoutAssetUpdateInputObjectSchema = Schema;
