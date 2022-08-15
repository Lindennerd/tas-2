import { z } from 'zod';
import { AnswerCreateWithoutQuestionInputObjectSchema } from './AnswerCreateWithoutQuestionInput.schema';
import { AnswerUncheckedCreateWithoutQuestionInputObjectSchema } from './AnswerUncheckedCreateWithoutQuestionInput.schema';
import { AnswerCreateOrConnectWithoutQuestionInputObjectSchema } from './AnswerCreateOrConnectWithoutQuestionInput.schema';
import { AnswerUpsertWithWhereUniqueWithoutQuestionInputObjectSchema } from './AnswerUpsertWithWhereUniqueWithoutQuestionInput.schema';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerUpdateWithWhereUniqueWithoutQuestionInputObjectSchema } from './AnswerUpdateWithWhereUniqueWithoutQuestionInput.schema';
import { AnswerUpdateManyWithWhereWithoutQuestionInputObjectSchema } from './AnswerUpdateManyWithWhereWithoutQuestionInput.schema';
import { AnswerScalarWhereInputObjectSchema } from './AnswerScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUncheckedUpdateManyWithoutQuestionNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => AnswerCreateWithoutQuestionInputObjectSchema),
          z.lazy(() => AnswerCreateWithoutQuestionInputObjectSchema).array(),
          z.lazy(() => AnswerUncheckedCreateWithoutQuestionInputObjectSchema),
          z
            .lazy(() => AnswerUncheckedCreateWithoutQuestionInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => AnswerCreateOrConnectWithoutQuestionInputObjectSchema),
          z
            .lazy(() => AnswerCreateOrConnectWithoutQuestionInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      upsert: z
        .union([
          z.lazy(
            () => AnswerUpsertWithWhereUniqueWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () => AnswerUpsertWithWhereUniqueWithoutQuestionInputObjectSchema,
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
            () => AnswerUpdateWithWhereUniqueWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () => AnswerUpdateWithWhereUniqueWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(
            () => AnswerUpdateManyWithWhereWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () => AnswerUpdateManyWithWhereWithoutQuestionInputObjectSchema,
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

export const AnswerUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema =
  Schema;
