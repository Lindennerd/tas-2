import { z } from 'zod';
import { QuestionCreateWithoutSectionInputObjectSchema } from './QuestionCreateWithoutSectionInput.schema';
import { QuestionUncheckedCreateWithoutSectionInputObjectSchema } from './QuestionUncheckedCreateWithoutSectionInput.schema';
import { QuestionCreateOrConnectWithoutSectionInputObjectSchema } from './QuestionCreateOrConnectWithoutSectionInput.schema';
import { QuestionUpsertWithWhereUniqueWithoutSectionInputObjectSchema } from './QuestionUpsertWithWhereUniqueWithoutSectionInput.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithWhereUniqueWithoutSectionInputObjectSchema } from './QuestionUpdateWithWhereUniqueWithoutSectionInput.schema';
import { QuestionUpdateManyWithWhereWithoutSectionInputObjectSchema } from './QuestionUpdateManyWithWhereWithoutSectionInput.schema';
import { QuestionScalarWhereInputObjectSchema } from './QuestionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateManyWithoutSectionNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutSectionInputObjectSchema),
          z.lazy(() => QuestionCreateWithoutSectionInputObjectSchema).array(),
          z.lazy(() => QuestionUncheckedCreateWithoutSectionInputObjectSchema),
          z
            .lazy(() => QuestionUncheckedCreateWithoutSectionInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => QuestionCreateOrConnectWithoutSectionInputObjectSchema),
          z
            .lazy(() => QuestionCreateOrConnectWithoutSectionInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      upsert: z
        .union([
          z.lazy(
            () => QuestionUpsertWithWhereUniqueWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionUpsertWithWhereUniqueWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      set: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      disconnect: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      delete: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(
            () => QuestionUpdateWithWhereUniqueWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                QuestionUpdateWithWhereUniqueWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(
            () => QuestionUpdateManyWithWhereWithoutSectionInputObjectSchema,
          ),
          z
            .lazy(
              () => QuestionUpdateManyWithWhereWithoutSectionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      deleteMany: z
        .union([
          z.lazy(() => QuestionScalarWhereInputObjectSchema),
          z.lazy(() => QuestionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const QuestionUpdateManyWithoutSectionNestedInputObjectSchema = Schema;
