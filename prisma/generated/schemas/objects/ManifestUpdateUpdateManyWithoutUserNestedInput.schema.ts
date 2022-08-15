import { z } from 'zod';
import { ManifestUpdateCreateWithoutUserInputObjectSchema } from './ManifestUpdateCreateWithoutUserInput.schema';
import { ManifestUpdateUncheckedCreateWithoutUserInputObjectSchema } from './ManifestUpdateUncheckedCreateWithoutUserInput.schema';
import { ManifestUpdateCreateOrConnectWithoutUserInputObjectSchema } from './ManifestUpdateCreateOrConnectWithoutUserInput.schema';
import { ManifestUpdateUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ManifestUpdateUpsertWithWhereUniqueWithoutUserInput.schema';
import { ManifestUpdateWhereUniqueInputObjectSchema } from './ManifestUpdateWhereUniqueInput.schema';
import { ManifestUpdateUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ManifestUpdateUpdateWithWhereUniqueWithoutUserInput.schema';
import { ManifestUpdateUpdateManyWithWhereWithoutUserInputObjectSchema } from './ManifestUpdateUpdateManyWithWhereWithoutUserInput.schema';
import { ManifestUpdateScalarWhereInputObjectSchema } from './ManifestUpdateScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateUpdateManyWithoutUserNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => ManifestUpdateCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ManifestUpdateCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () => ManifestUpdateUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ManifestUpdateUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(
            () => ManifestUpdateCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ManifestUpdateCreateOrConnectWithoutUserInputObjectSchema,
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
              ManifestUpdateUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ManifestUpdateUpsertWithWhereUniqueWithoutUserInputObjectSchema,
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
              ManifestUpdateUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ManifestUpdateUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(
            () => ManifestUpdateUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ManifestUpdateUpdateManyWithWhereWithoutUserInputObjectSchema,
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

export const ManifestUpdateUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
