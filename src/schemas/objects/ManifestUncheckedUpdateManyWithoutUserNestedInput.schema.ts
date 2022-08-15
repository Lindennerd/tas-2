import { z } from 'zod';
import { ManifestCreateWithoutUserInputObjectSchema } from './ManifestCreateWithoutUserInput.schema';
import { ManifestUncheckedCreateWithoutUserInputObjectSchema } from './ManifestUncheckedCreateWithoutUserInput.schema';
import { ManifestCreateOrConnectWithoutUserInputObjectSchema } from './ManifestCreateOrConnectWithoutUserInput.schema';
import { ManifestUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ManifestUpsertWithWhereUniqueWithoutUserInput.schema';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';
import { ManifestUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ManifestUpdateWithWhereUniqueWithoutUserInput.schema';
import { ManifestUpdateManyWithWhereWithoutUserInputObjectSchema } from './ManifestUpdateManyWithWhereWithoutUserInput.schema';
import { ManifestScalarWhereInputObjectSchema } from './ManifestScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUncheckedUpdateManyWithoutUserNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => ManifestCreateWithoutUserInputObjectSchema),
          z.lazy(() => ManifestCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => ManifestUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ManifestUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => ManifestCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => ManifestCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      upsert: z
        .union([
          z.lazy(
            () => ManifestUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ManifestUpsertWithWhereUniqueWithoutUserInputObjectSchema,
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
            () => ManifestUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ManifestUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(() => ManifestUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => ManifestUpdateManyWithWhereWithoutUserInputObjectSchema)
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

export const ManifestUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
