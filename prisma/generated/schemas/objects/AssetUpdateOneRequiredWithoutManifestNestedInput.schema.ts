import { z } from 'zod';
import { AssetCreateWithoutManifestInputObjectSchema } from './AssetCreateWithoutManifestInput.schema';
import { AssetUncheckedCreateWithoutManifestInputObjectSchema } from './AssetUncheckedCreateWithoutManifestInput.schema';
import { AssetCreateOrConnectWithoutManifestInputObjectSchema } from './AssetCreateOrConnectWithoutManifestInput.schema';
import { AssetUpsertWithoutManifestInputObjectSchema } from './AssetUpsertWithoutManifestInput.schema';
import { AssetWhereUniqueInputObjectSchema } from './AssetWhereUniqueInput.schema';
import { AssetUpdateWithoutManifestInputObjectSchema } from './AssetUpdateWithoutManifestInput.schema';
import { AssetUncheckedUpdateWithoutManifestInputObjectSchema } from './AssetUncheckedUpdateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateOneRequiredWithoutManifestNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => AssetCreateWithoutManifestInputObjectSchema),
          z.lazy(() => AssetUncheckedCreateWithoutManifestInputObjectSchema),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => AssetCreateOrConnectWithoutManifestInputObjectSchema)
        .optional(),
    }),
    z.object({
      upsert: z
        .lazy(() => AssetUpsertWithoutManifestInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => AssetWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => AssetUpdateWithoutManifestInputObjectSchema),
          z.lazy(() => AssetUncheckedUpdateWithoutManifestInputObjectSchema),
        ])
        .optional(),
    }),
  ]);

export const AssetUpdateOneRequiredWithoutManifestNestedInputObjectSchema =
  Schema;
