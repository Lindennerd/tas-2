import { z } from 'zod';
import { ManifestCreateWithoutAssetInputObjectSchema } from './ManifestCreateWithoutAssetInput.schema';
import { ManifestUncheckedCreateWithoutAssetInputObjectSchema } from './ManifestUncheckedCreateWithoutAssetInput.schema';
import { ManifestCreateOrConnectWithoutAssetInputObjectSchema } from './ManifestCreateOrConnectWithoutAssetInput.schema';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUncheckedCreateNestedManyWithoutAssetInput> =
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
      connect: z
        .union([
          z.lazy(() => ManifestWhereUniqueInputObjectSchema),
          z.lazy(() => ManifestWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const ManifestUncheckedCreateNestedManyWithoutAssetInputObjectSchema =
  Schema;
