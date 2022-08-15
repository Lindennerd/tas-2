import { z } from 'zod';
import { ManifestCreateWithoutManifestUpdateInputObjectSchema } from './ManifestCreateWithoutManifestUpdateInput.schema';
import { ManifestUncheckedCreateWithoutManifestUpdateInputObjectSchema } from './ManifestUncheckedCreateWithoutManifestUpdateInput.schema';
import { ManifestCreateOrConnectWithoutManifestUpdateInputObjectSchema } from './ManifestCreateOrConnectWithoutManifestUpdateInput.schema';
import { ManifestUpsertWithoutManifestUpdateInputObjectSchema } from './ManifestUpsertWithoutManifestUpdateInput.schema';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';
import { ManifestUpdateWithoutManifestUpdateInputObjectSchema } from './ManifestUpdateWithoutManifestUpdateInput.schema';
import { ManifestUncheckedUpdateWithoutManifestUpdateInputObjectSchema } from './ManifestUncheckedUpdateWithoutManifestUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateOneRequiredWithoutManifestUpdateNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => ManifestCreateWithoutManifestUpdateInputObjectSchema),
          z.lazy(
            () => ManifestUncheckedCreateWithoutManifestUpdateInputObjectSchema,
          ),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(
          () => ManifestCreateOrConnectWithoutManifestUpdateInputObjectSchema,
        )
        .optional(),
    }),
    z.object({
      upsert: z
        .lazy(() => ManifestUpsertWithoutManifestUpdateInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => ManifestWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => ManifestUpdateWithoutManifestUpdateInputObjectSchema),
          z.lazy(
            () => ManifestUncheckedUpdateWithoutManifestUpdateInputObjectSchema,
          ),
        ])
        .optional(),
    }),
  ]);

export const ManifestUpdateOneRequiredWithoutManifestUpdateNestedInputObjectSchema =
  Schema;
