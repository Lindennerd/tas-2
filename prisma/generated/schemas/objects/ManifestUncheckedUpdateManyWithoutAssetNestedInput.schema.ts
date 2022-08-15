import { z } from 'zod';
import { ManifestCreateWithoutAssetInputObjectSchema } from './ManifestCreateWithoutAssetInput.schema';
import { ManifestUncheckedCreateWithoutAssetInputObjectSchema } from './ManifestUncheckedCreateWithoutAssetInput.schema';
import { ManifestCreateOrConnectWithoutAssetInputObjectSchema } from './ManifestCreateOrConnectWithoutAssetInput.schema';
import { ManifestUpsertWithWhereUniqueWithoutAssetInputObjectSchema } from './ManifestUpsertWithWhereUniqueWithoutAssetInput.schema';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';
import { ManifestUpdateWithWhereUniqueWithoutAssetInputObjectSchema } from './ManifestUpdateWithWhereUniqueWithoutAssetInput.schema';
import { ManifestUpdateManyWithWhereWithoutAssetInputObjectSchema } from './ManifestUpdateManyWithWhereWithoutAssetInput.schema';
import { ManifestScalarWhereInputObjectSchema } from './ManifestScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUncheckedUpdateManyWithoutAssetNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => ManifestCreateWithoutAssetInputObjectSchema),
          z.lazy(() => ManifestCreateWithoutAssetInputObjectSchema).array(),
          z.lazy(() => ManifestUncheckedCreateWithoutAssetInputObjectSchema),
          z
            .lazy(() => ManifestUncheckedCreateWithoutAssetInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => ManifestCreateOrConnectWithoutAssetInputObjectSchema),
          z
            .lazy(() => ManifestCreateOrConnectWithoutAssetInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      upsert: z
        .union([
          z.lazy(
            () => ManifestUpsertWithWhereUniqueWithoutAssetInputObjectSchema,
          ),
          z
            .lazy(
              () => ManifestUpsertWithWhereUniqueWithoutAssetInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      set: z
        .union([
          z.lazy(() => ManifestWhereUniqueInputObjectSchema),
          z.lazy(() => ManifestWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      disconnect: z
        .union([
          z.lazy(() => ManifestWhereUniqueInputObjectSchema),
          z.lazy(() => ManifestWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      delete: z
        .union([
          z.lazy(() => ManifestWhereUniqueInputObjectSchema),
          z.lazy(() => ManifestWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => ManifestWhereUniqueInputObjectSchema),
          z.lazy(() => ManifestWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(
            () => ManifestUpdateWithWhereUniqueWithoutAssetInputObjectSchema,
          ),
          z
            .lazy(
              () => ManifestUpdateWithWhereUniqueWithoutAssetInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(
            () => ManifestUpdateManyWithWhereWithoutAssetInputObjectSchema,
          ),
          z
            .lazy(
              () => ManifestUpdateManyWithWhereWithoutAssetInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      deleteMany: z
        .union([
          z.lazy(() => ManifestScalarWhereInputObjectSchema),
          z.lazy(() => ManifestScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const ManifestUncheckedUpdateManyWithoutAssetNestedInputObjectSchema =
  Schema;
