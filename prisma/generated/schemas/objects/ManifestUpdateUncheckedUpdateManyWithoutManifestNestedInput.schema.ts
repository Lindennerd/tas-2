import { z } from 'zod';
import { ManifestUpdateCreateWithoutManifestInputObjectSchema } from './ManifestUpdateCreateWithoutManifestInput.schema';
import { ManifestUpdateUncheckedCreateWithoutManifestInputObjectSchema } from './ManifestUpdateUncheckedCreateWithoutManifestInput.schema';
import { ManifestUpdateCreateOrConnectWithoutManifestInputObjectSchema } from './ManifestUpdateCreateOrConnectWithoutManifestInput.schema';
import { ManifestUpdateUpsertWithWhereUniqueWithoutManifestInputObjectSchema } from './ManifestUpdateUpsertWithWhereUniqueWithoutManifestInput.schema';
import { ManifestUpdateWhereUniqueInputObjectSchema } from './ManifestUpdateWhereUniqueInput.schema';
import { ManifestUpdateUpdateWithWhereUniqueWithoutManifestInputObjectSchema } from './ManifestUpdateUpdateWithWhereUniqueWithoutManifestInput.schema';
import { ManifestUpdateUpdateManyWithWhereWithoutManifestInputObjectSchema } from './ManifestUpdateUpdateManyWithWhereWithoutManifestInput.schema';
import { ManifestUpdateScalarWhereInputObjectSchema } from './ManifestUpdateScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateUncheckedUpdateManyWithoutManifestNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ManifestUpdateUpsertWithWhereUniqueWithoutManifestInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ManifestUpdateUpsertWithWhereUniqueWithoutManifestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      set: z
        .union([
          z.lazy(() => ManifestUpdateWhereUniqueInputObjectSchema),
          z.lazy(() => ManifestUpdateWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      disconnect: z
        .union([
          z.lazy(() => ManifestUpdateWhereUniqueInputObjectSchema),
          z.lazy(() => ManifestUpdateWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      delete: z
        .union([
          z.lazy(() => ManifestUpdateWhereUniqueInputObjectSchema),
          z.lazy(() => ManifestUpdateWhereUniqueInputObjectSchema).array(),
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
    z.object({
      update: z
        .union([
          z.lazy(
            () =>
              ManifestUpdateUpdateWithWhereUniqueWithoutManifestInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ManifestUpdateUpdateWithWhereUniqueWithoutManifestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(
            () =>
              ManifestUpdateUpdateManyWithWhereWithoutManifestInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ManifestUpdateUpdateManyWithWhereWithoutManifestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      deleteMany: z
        .union([
          z.lazy(() => ManifestUpdateScalarWhereInputObjectSchema),
          z.lazy(() => ManifestUpdateScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const ManifestUpdateUncheckedUpdateManyWithoutManifestNestedInputObjectSchema =
  Schema;
