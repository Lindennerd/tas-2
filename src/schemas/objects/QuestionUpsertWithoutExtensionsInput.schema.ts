import { z } from 'zod';
import { QuestionUpdateWithoutExtensionsInputObjectSchema } from './QuestionUpdateWithoutExtensionsInput.schema';
import { QuestionUncheckedUpdateWithoutExtensionsInputObjectSchema } from './QuestionUncheckedUpdateWithoutExtensionsInput.schema';
import { QuestionCreateWithoutExtensionsInputObjectSchema } from './QuestionCreateWithoutExtensionsInput.schema';
import { QuestionUncheckedCreateWithoutExtensionsInputObjectSchema } from './QuestionUncheckedCreateWithoutExtensionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpsertWithoutExtensionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => QuestionUpdateWithoutExtensionsInputObjectSchema),
      z.lazy(() => QuestionUncheckedUpdateWithoutExtensionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutExtensionsInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutExtensionsInputObjectSchema),
    ]),
  })
  .strict();

export const QuestionUpsertWithoutExtensionsInputObjectSchema = Schema;
