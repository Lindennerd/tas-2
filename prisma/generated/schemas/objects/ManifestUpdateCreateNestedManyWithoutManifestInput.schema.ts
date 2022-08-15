import { z } from 'zod';
import { ManifestUpdateCreateWithoutManifestInputObjectSchema } from './ManifestUpdateCreateWithoutManifestInput.schema';
import { ManifestUpdateUncheckedCreateWithoutManifestInputObjectSchema } from './ManifestUpdateUncheckedCreateWithoutManifestInput.schema';
import { ManifestUpdateCreateOrConnectWithoutManifestInputObjectSchema } from './ManifestUpdateCreateOrConnectWithoutManifestInput.schema';
import { ManifestUpdateWhereUniqueInputObjectSchema } from './ManifestUpdateWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateCreateNestedManyWithoutManifestInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => ManifestUpdateCreateWithoutManifestInputObjectSchema),
          z
            .lazy(() => ManifestUpdateCreateWithoutManifestInputObjectSchema)
            .array(),
          z.lazy(
            () => ManifestUpdateUncheckedCreateWithoutManifestInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ManifestUpdateUncheckedCreateWithoutManifestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(
            () => ManifestUpdateCreateOrConnectWithoutManifestInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ManifestUpdateCreateOrConnectWithoutManifestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => ManifestUpdateWhereUniqueInputObjectSchema),
          z.lazy(() => ManifestUpdateWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const ManifestUpdateCreateNestedManyWithoutManifestInputObjectSchema =
  Schema;
