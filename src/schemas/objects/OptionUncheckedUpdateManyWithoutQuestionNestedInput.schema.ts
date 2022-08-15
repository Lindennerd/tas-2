import { z } from 'zod';
import { OptionCreateWithoutQuestionInputObjectSchema } from './OptionCreateWithoutQuestionInput.schema';
import { OptionUncheckedCreateWithoutQuestionInputObjectSchema } from './OptionUncheckedCreateWithoutQuestionInput.schema';
import { OptionCreateOrConnectWithoutQuestionInputObjectSchema } from './OptionCreateOrConnectWithoutQuestionInput.schema';
import { OptionUpsertWithWhereUniqueWithoutQuestionInputObjectSchema } from './OptionUpsertWithWhereUniqueWithoutQuestionInput.schema';
import { OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema';
import { OptionUpdateWithWhereUniqueWithoutQuestionInputObjectSchema } from './OptionUpdateWithWhereUniqueWithoutQuestionInput.schema';
import { OptionUpdateManyWithWhereWithoutQuestionInputObjectSchema } from './OptionUpdateManyWithWhereWithoutQuestionInput.schema';
import { OptionScalarWhereInputObjectSchema } from './OptionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OptionUncheckedUpdateManyWithoutQuestionNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => OptionCreateWithoutQuestionInputObjectSchema),
          z.lazy(() => OptionCreateWithoutQuestionInputObjectSchema).array(),
          z.lazy(() => OptionUncheckedCreateWithoutQuestionInputObjectSchema),
          z
            .lazy(() => OptionUncheckedCreateWithoutQuestionInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => OptionCreateOrConnectWithoutQuestionInputObjectSchema),
          z
            .lazy(() => OptionCreateOrConnectWithoutQuestionInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      upsert: z
        .union([
          z.lazy(
            () => OptionUpsertWithWhereUniqueWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () => OptionUpsertWithWhereUniqueWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      set: z
        .union([
          z.lazy(() => OptionWhereUniqueInputObjectSchema),
          z.lazy(() => OptionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      disconnect: z
        .union([
          z.lazy(() => OptionWhereUniqueInputObjectSchema),
          z.lazy(() => OptionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      delete: z
        .union([
          z.lazy(() => OptionWhereUniqueInputObjectSchema),
          z.lazy(() => OptionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => OptionWhereUniqueInputObjectSchema),
          z.lazy(() => OptionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(
            () => OptionUpdateWithWhereUniqueWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () => OptionUpdateWithWhereUniqueWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(
            () => OptionUpdateManyWithWhereWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () => OptionUpdateManyWithWhereWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      deleteMany: z
        .union([
          z.lazy(() => OptionScalarWhereInputObjectSchema),
          z.lazy(() => OptionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const OptionUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema =
  Schema;
