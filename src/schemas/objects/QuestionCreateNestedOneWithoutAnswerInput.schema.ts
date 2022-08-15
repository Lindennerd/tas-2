import { z } from 'zod';
import { QuestionCreateWithoutAnswerInputObjectSchema } from './QuestionCreateWithoutAnswerInput.schema';
import { QuestionUncheckedCreateWithoutAnswerInputObjectSchema } from './QuestionUncheckedCreateWithoutAnswerInput.schema';
import { QuestionCreateOrConnectWithoutAnswerInputObjectSchema } from './QuestionCreateOrConnectWithoutAnswerInput.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateNestedOneWithoutAnswerInput> =
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
      connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
    }),
  ]);

export const QuestionCreateNestedOneWithoutAnswerInputObjectSchema = Schema;
