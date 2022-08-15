import { z } from 'zod';
import { QuestionCreateWithoutOptionInputObjectSchema } from './QuestionCreateWithoutOptionInput.schema';
import { QuestionUncheckedCreateWithoutOptionInputObjectSchema } from './QuestionUncheckedCreateWithoutOptionInput.schema';
import { QuestionCreateOrConnectWithoutOptionInputObjectSchema } from './QuestionCreateOrConnectWithoutOptionInput.schema';
import { QuestionUpsertWithoutOptionInputObjectSchema } from './QuestionUpsertWithoutOptionInput.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutOptionInputObjectSchema } from './QuestionUpdateWithoutOptionInput.schema';
import { QuestionUncheckedUpdateWithoutOptionInputObjectSchema } from './QuestionUncheckedUpdateWithoutOptionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateOneRequiredWithoutOptionNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutOptionInputObjectSchema),
          z.lazy(() => QuestionUncheckedCreateWithoutOptionInputObjectSchema),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => QuestionCreateOrConnectWithoutOptionInputObjectSchema)
        .optional(),
    }),
    z.object({
      upsert: z
        .lazy(() => QuestionUpsertWithoutOptionInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => QuestionUpdateWithoutOptionInputObjectSchema),
          z.lazy(() => QuestionUncheckedUpdateWithoutOptionInputObjectSchema),
        ])
        .optional(),
    }),
  ]);

export const QuestionUpdateOneRequiredWithoutOptionNestedInputObjectSchema =
  Schema;
