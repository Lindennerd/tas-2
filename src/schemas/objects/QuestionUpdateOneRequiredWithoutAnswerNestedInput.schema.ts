import { z } from 'zod';
import { QuestionCreateWithoutAnswerInputObjectSchema } from './QuestionCreateWithoutAnswerInput.schema';
import { QuestionUncheckedCreateWithoutAnswerInputObjectSchema } from './QuestionUncheckedCreateWithoutAnswerInput.schema';
import { QuestionCreateOrConnectWithoutAnswerInputObjectSchema } from './QuestionCreateOrConnectWithoutAnswerInput.schema';
import { QuestionUpsertWithoutAnswerInputObjectSchema } from './QuestionUpsertWithoutAnswerInput.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutAnswerInputObjectSchema } from './QuestionUpdateWithoutAnswerInput.schema';
import { QuestionUncheckedUpdateWithoutAnswerInputObjectSchema } from './QuestionUncheckedUpdateWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateOneRequiredWithoutAnswerNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutAnswerInputObjectSchema),
          z.lazy(() => QuestionUncheckedCreateWithoutAnswerInputObjectSchema),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => QuestionCreateOrConnectWithoutAnswerInputObjectSchema)
        .optional(),
    }),
    z.object({
      upsert: z
        .lazy(() => QuestionUpsertWithoutAnswerInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => QuestionUpdateWithoutAnswerInputObjectSchema),
          z.lazy(() => QuestionUncheckedUpdateWithoutAnswerInputObjectSchema),
        ])
        .optional(),
    }),
  ]);

export const QuestionUpdateOneRequiredWithoutAnswerNestedInputObjectSchema =
  Schema;
