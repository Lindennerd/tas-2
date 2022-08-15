import { z } from 'zod';
import { AssetCreateWithoutUserInputObjectSchema } from './AssetCreateWithoutUserInput.schema';
import { AssetUncheckedCreateWithoutUserInputObjectSchema } from './AssetUncheckedCreateWithoutUserInput.schema';
import { AssetCreateOrConnectWithoutUserInputObjectSchema } from './AssetCreateOrConnectWithoutUserInput.schema';
import { AssetUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './AssetUpsertWithWhereUniqueWithoutUserInput.schema';
import { AssetWhereUniqueInputObjectSchema } from './AssetWhereUniqueInput.schema';
import { AssetUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './AssetUpdateWithWhereUniqueWithoutUserInput.schema';
import { AssetUpdateManyWithWhereWithoutUserInputObjectSchema } from './AssetUpdateManyWithWhereWithoutUserInput.schema';
import { AssetScalarWhereInputObjectSchema } from './AssetScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateManyWithoutUserNestedInput> = z.union(
  [
    z.object({
      create: z
        .union([
          z.lazy(() => AssetCreateWithoutUserInputObjectSchema),
          z.lazy(() => AssetCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => AssetUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => AssetUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => AssetCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => AssetCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      upsert: z
        .union([
          z.lazy(() => AssetUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => AssetUpsertWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      set: z
        .union([
          z.lazy(() => AssetWhereUniqueInputObjectSchema),
          z.lazy(() => AssetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      disconnect: z
        .union([
          z.lazy(() => AssetWhereUniqueInputObjectSchema),
          z.lazy(() => AssetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      delete: z
        .union([
          z.lazy(() => AssetWhereUniqueInputObjectSchema),
          z.lazy(() => AssetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => AssetWhereUniqueInputObjectSchema),
          z.lazy(() => AssetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => AssetUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => AssetUpdateWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(() => AssetUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => AssetUpdateManyWithWhereWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      deleteMany: z
        .union([
          z.lazy(() => AssetScalarWhereInputObjectSchema),
          z.lazy(() => AssetScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ],
);

export const AssetUpdateManyWithoutUserNestedInputObjectSchema = Schema;
