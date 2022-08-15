import { z } from 'zod';
import { AssetUpdateCreateWithoutAssetInputObjectSchema } from './AssetUpdateCreateWithoutAssetInput.schema';
import { AssetUpdateUncheckedCreateWithoutAssetInputObjectSchema } from './AssetUpdateUncheckedCreateWithoutAssetInput.schema';
import { AssetUpdateCreateOrConnectWithoutAssetInputObjectSchema } from './AssetUpdateCreateOrConnectWithoutAssetInput.schema';
import { AssetUpdateWhereUniqueInputObjectSchema } from './AssetUpdateWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateUncheckedCreateNestedManyWithoutAssetInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => AssetUpdateCreateWithoutAssetInputObjectSchema),
          z.lazy(() => AssetUpdateCreateWithoutAssetInputObjectSchema).array(),
          z.lazy(() => AssetUpdateUncheckedCreateWithoutAssetInputObjectSchema),
          z
            .lazy(() => AssetUpdateUncheckedCreateWithoutAssetInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => AssetUpdateCreateOrConnectWithoutAssetInputObjectSchema),
          z
            .lazy(() => AssetUpdateCreateOrConnectWithoutAssetInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => AssetUpdateWhereUniqueInputObjectSchema),
          z.lazy(() => AssetUpdateWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const AssetUpdateUncheckedCreateNestedManyWithoutAssetInputObjectSchema =
  Schema;
