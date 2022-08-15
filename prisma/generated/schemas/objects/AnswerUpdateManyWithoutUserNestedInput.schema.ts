import { z } from 'zod';
import { AnswerCreateWithoutUserInputObjectSchema } from './AnswerCreateWithoutUserInput.schema';
import { AnswerUncheckedCreateWithoutUserInputObjectSchema } from './AnswerUncheckedCreateWithoutUserInput.schema';
import { AnswerCreateOrConnectWithoutUserInputObjectSchema } from './AnswerCreateOrConnectWithoutUserInput.schema';
import { AnswerUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './AnswerUpsertWithWhereUniqueWithoutUserInput.schema';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './AnswerUpdateWithWhereUniqueWithoutUserInput.schema';
import { AnswerUpdateManyWithWhereWithoutUserInputObjectSchema } from './AnswerUpdateManyWithWhereWithoutUserInput.schema';
import { AnswerScalarWhereInputObjectSchema } from './AnswerScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUpdateManyWithoutUserNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => AnswerCreateWithoutUserInputObjectSchema),
          z.lazy(() => AnswerCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => AnswerUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => AnswerUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => AnswerCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => AnswerCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      upsert: z
        .union([
          z.lazy(() => AnswerUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => AnswerUpsertWithWhereUniqueWithoutUserInputObjectSchema)
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
          z.lazy(() => AnswerUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => AnswerUpdateWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(() => AnswerUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => AnswerUpdateManyWithWhereWithoutUserInputObjectSchema)
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

export const AnswerUpdateManyWithoutUserNestedInputObjectSchema = Schema;
