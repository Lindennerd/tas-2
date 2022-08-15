import { z } from 'zod';
import { QuestionUpdateWithoutAnswerInputObjectSchema } from './QuestionUpdateWithoutAnswerInput.schema';
import { QuestionUncheckedUpdateWithoutAnswerInputObjectSchema } from './QuestionUncheckedUpdateWithoutAnswerInput.schema';
import { QuestionCreateWithoutAnswerInputObjectSchema } from './QuestionCreateWithoutAnswerInput.schema';
import { QuestionUncheckedCreateWithoutAnswerInputObjectSchema } from './QuestionUncheckedCreateWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpsertWithoutAnswerInput> = z
  .object({
    update: z.union([
      z.lazy(() => QuestionUpdateWithoutAnswerInputObjectSchema),
      z.lazy(() => QuestionUncheckedUpdateWithoutAnswerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutAnswerInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutAnswerInputObjectSchema),
    ]),
  })
  .strict();

export const QuestionUpsertWithoutAnswerInputObjectSchema = Schema;
