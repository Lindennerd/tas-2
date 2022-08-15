import { z } from 'zod';
import { AssetUpdateCreateWithoutUserInputObjectSchema } from './AssetUpdateCreateWithoutUserInput.schema';
import { AssetUpdateUncheckedCreateWithoutUserInputObjectSchema } from './AssetUpdateUncheckedCreateWithoutUserInput.schema';
import { AssetUpdateCreateOrConnectWithoutUserInputObjectSchema } from './AssetUpdateCreateOrConnectWithoutUserInput.schema';
import { AssetUpdateUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './AssetUpdateUpsertWithWhereUniqueWithoutUserInput.schema';
import { AssetUpdateWhereUniqueInputObjectSchema } from './AssetUpdateWhereUniqueInput.schema';
import { AssetUpdateUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './AssetUpdateUpdateWithWhereUniqueWithoutUserInput.schema';
import { AssetUpdateUpdateManyWithWhereWithoutUserInputObjectSchema } from './AssetUpdateUpdateManyWithWhereWithoutUserInput.schema';
import { AssetUpdateScalarWhereInputObjectSchema } from './AssetUpdateScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateUpdateManyWithoutUserNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => AssetUpdateCreateWithoutUserInputObjectSchema),
          z.lazy(() => AssetUpdateCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => AssetUpdateUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => AssetUpdateUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => AssetUpdateCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => AssetUpdateCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      upsert: z
        .union([
          z.lazy(
            () => AssetUpdateUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AssetUpdateUpsertWithWhereUniqueWithoutUserInputObjectSchema,
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
            () => AssetUpdateUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AssetUpdateUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(
            () => AssetUpdateUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => AssetUpdateUpdateManyWithWhereWithoutUserInputObjectSchema,
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

export const AssetUpdateUpdateManyWithoutUserNestedInputObjectSchema = Schema;
