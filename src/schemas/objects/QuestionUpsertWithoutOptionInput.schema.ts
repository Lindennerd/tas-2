import { z } from 'zod';
import { QuestionUpdateWithoutOptionInputObjectSchema } from './QuestionUpdateWithoutOptionInput.schema';
import { QuestionUncheckedUpdateWithoutOptionInputObjectSchema } from './QuestionUncheckedUpdateWithoutOptionInput.schema';
import { QuestionCreateWithoutOptionInputObjectSchema } from './QuestionCreateWithoutOptionInput.schema';
import { QuestionUncheckedCreateWithoutOptionInputObjectSchema } from './QuestionUncheckedCreateWithoutOptionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpsertWithoutOptionInput> = z
  .object({
    update: z.union([
      z.lazy(() => QuestionUpdateWithoutOptionInputObjectSchema),
      z.lazy(() => QuestionUncheckedUpdateWithoutOptionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutOptionInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutOptionInputObjectSchema),
    ]),
  })
  .strict();

export const QuestionUpsertWithoutOptionInputObjectSchema = Schema;
