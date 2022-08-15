import { z } from 'zod';
import { AnswerCreateWithoutManifestInputObjectSchema } from './AnswerCreateWithoutManifestInput.schema';
import { AnswerUncheckedCreateWithoutManifestInputObjectSchema } from './AnswerUncheckedCreateWithoutManifestInput.schema';
import { AnswerCreateOrConnectWithoutManifestInputObjectSchema } from './AnswerCreateOrConnectWithoutManifestInput.schema';
import { AnswerUpsertWithWhereUniqueWithoutManifestInputObjectSchema } from './AnswerUpsertWithWhereUniqueWithoutManifestInput.schema';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerUpdateWithWhereUniqueWithoutManifestInputObjectSchema } from './AnswerUpdateWithWhereUniqueWithoutManifestInput.schema';
import { AnswerUpdateManyWithWhereWithoutManifestInputObjectSchema } from './AnswerUpdateManyWithWhereWithoutManifestInput.schema';
import { AnswerScalarWhereInputObjectSchema } from './AnswerScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUncheckedUpdateManyWithoutManifestNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => AnswerCreateWithoutManifestInputObjectSchema),
          z.lazy(() => AnswerCreateWithoutManifestInputObjectSchema).array(),
          z.lazy(() => AnswerUncheckedCreateWithoutManifestInputObjectSchema),
          z
            .lazy(() => AnswerUncheckedCreateWithoutManifestInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => AnswerCreateOrConnectWithoutManifestInputObjectSchema),
          z
            .lazy(() => AnswerCreateOrConnectWithoutManifestInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      upsert: z
        .union([
          z.lazy(
            () => AnswerUpsertWithWhereUniqueWithoutManifestInputObjectSchema,
          ),
          z
            .lazy(
              () => AnswerUpsertWithWhereUniqueWithoutManifestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      set: z
        .union([
          z.lazy(() => AnswerWhereUniqueInputObjectSchema),
          z.lazy(() => AnswerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      disconnect: z
        .union([
          z.lazy(() => AnswerWhereUniqueInputObjectSchema),
          z.lazy(() => AnswerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      delete: z
        .union([
          z.lazy(() => AnswerWhereUniqueInputObjectSchema),
          z.lazy(() => AnswerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => AnswerWhereUniqueInputObjectSchema),
          z.lazy(() => AnswerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(
            () => AnswerUpdateWithWhereUniqueWithoutManifestInputObjectSchema,
          ),
          z
            .lazy(
              () => AnswerUpdateWithWhereUniqueWithoutManifestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(
            () => AnswerUpdateManyWithWhereWithoutManifestInputObjectSchema,
          ),
          z
            .lazy(
              () => AnswerUpdateManyWithWhereWithoutManifestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      deleteMany: z
        .union([
          z.lazy(() => AnswerScalarWhereInputObjectSchema),
          z.lazy(() => AnswerScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const AnswerUncheckedUpdateManyWithoutManifestNestedInputObjectSchema =
  Schema;
