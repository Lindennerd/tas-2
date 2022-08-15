import { z } from 'zod';
import { ExtensionsCreateWithoutQuestionInputObjectSchema } from './ExtensionsCreateWithoutQuestionInput.schema';
import { ExtensionsUncheckedCreateWithoutQuestionInputObjectSchema } from './ExtensionsUncheckedCreateWithoutQuestionInput.schema';
import { ExtensionsCreateOrConnectWithoutQuestionInputObjectSchema } from './ExtensionsCreateOrConnectWithoutQuestionInput.schema';
import { ExtensionsUpsertWithWhereUniqueWithoutQuestionInputObjectSchema } from './ExtensionsUpsertWithWhereUniqueWithoutQuestionInput.schema';
import { ExtensionsWhereUniqueInputObjectSchema } from './ExtensionsWhereUniqueInput.schema';
import { ExtensionsUpdateWithWhereUniqueWithoutQuestionInputObjectSchema } from './ExtensionsUpdateWithWhereUniqueWithoutQuestionInput.schema';
import { ExtensionsUpdateManyWithWhereWithoutQuestionInputObjectSchema } from './ExtensionsUpdateManyWithWhereWithoutQuestionInput.schema';
import { ExtensionsScalarWhereInputObjectSchema } from './ExtensionsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExtensionsUpdateManyWithoutQuestionNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => ExtensionsCreateWithoutQuestionInputObjectSchema),
          z
            .lazy(() => ExtensionsCreateWithoutQuestionInputObjectSchema)
            .array(),
          z.lazy(
            () => ExtensionsUncheckedCreateWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () => ExtensionsUncheckedCreateWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(
            () => ExtensionsCreateOrConnectWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () => ExtensionsCreateOrConnectWithoutQuestionInputObjectSchema,
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
              ExtensionsUpsertWithWhereUniqueWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExtensionsUpsertWithWhereUniqueWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      set: z
        .union([
          z.lazy(() => ExtensionsWhereUniqueInputObjectSchema),
          z.lazy(() => ExtensionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      disconnect: z
        .union([
          z.lazy(() => ExtensionsWhereUniqueInputObjectSchema),
          z.lazy(() => ExtensionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      delete: z
        .union([
          z.lazy(() => ExtensionsWhereUniqueInputObjectSchema),
          z.lazy(() => ExtensionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => ExtensionsWhereUniqueInputObjectSchema),
          z.lazy(() => ExtensionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(
            () =>
              ExtensionsUpdateWithWhereUniqueWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExtensionsUpdateWithWhereUniqueWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(
            () => ExtensionsUpdateManyWithWhereWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ExtensionsUpdateManyWithWhereWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      deleteMany: z
        .union([
          z.lazy(() => ExtensionsScalarWhereInputObjectSchema),
          z.lazy(() => ExtensionsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const ExtensionsUpdateManyWithoutQuestionNestedInputObjectSchema =
  Schema;
