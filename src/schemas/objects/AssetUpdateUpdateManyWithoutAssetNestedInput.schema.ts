import { z } from 'zod';
import { AssetUpdateCreateWithoutAssetInputObjectSchema } from './AssetUpdateCreateWithoutAssetInput.schema';
import { AssetUpdateUncheckedCreateWithoutAssetInputObjectSchema } from './AssetUpdateUncheckedCreateWithoutAssetInput.schema';
import { AssetUpdateCreateOrConnectWithoutAssetInputObjectSchema } from './AssetUpdateCreateOrConnectWithoutAssetInput.schema';
import { AssetUpdateUpsertWithWhereUniqueWithoutAssetInputObjectSchema } from './AssetUpdateUpsertWithWhereUniqueWithoutAssetInput.schema';
import { AssetUpdateWhereUniqueInputObjectSchema } from './AssetUpdateWhereUniqueInput.schema';
import { AssetUpdateUpdateWithWhereUniqueWithoutAssetInputObjectSchema } from './AssetUpdateUpdateWithWhereUniqueWithoutAssetInput.schema';
import { AssetUpdateUpdateManyWithWhereWithoutAssetInputObjectSchema } from './AssetUpdateUpdateManyWithWhereWithoutAssetInput.schema';
import { AssetUpdateScalarWhereInputObjectSchema } from './AssetUpdateScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateUpdateManyWithoutAssetNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => AssetUpdateUpsertWithWhereUniqueWithoutAssetInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AssetUpdateUpsertWithWhereUniqueWithoutAssetInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      set: z
        .union([
          z.lazy(() => AssetUpdateWhereUniqueInputObjectSchema),
          z.lazy(() => AssetUpdateWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      disconnect: z
        .union([
          z.lazy(() => AssetUpdateWhereUniqueInputObjectSchema),
          z.lazy(() => AssetUpdateWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      delete: z
        .union([
          z.lazy(() => AssetUpdateWhereUniqueInputObjectSchema),
          z.lazy(() => AssetUpdateWhereUniqueInputObjectSchema).array(),
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
    z.object({
      update: z
        .union([
          z.lazy(
            () => AssetUpdateUpdateWithWhereUniqueWithoutAssetInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AssetUpdateUpdateWithWhereUniqueWithoutAssetInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(
            () => AssetUpdateUpdateManyWithWhereWithoutAssetInputObjectSchema,
          ),
          z
            .lazy(
              () => AssetUpdateUpdateManyWithWhereWithoutAssetInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      deleteMany: z
        .union([
          z.lazy(() => AssetUpdateScalarWhereInputObjectSchema),
          z.lazy(() => AssetUpdateScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const AssetUpdateUpdateManyWithoutAssetNestedInputObjectSchema = Schema;
