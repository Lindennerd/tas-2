import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionCreateWithoutOptionInputObjectSchema } from './QuestionCreateWithoutOptionInput.schema';
import { QuestionUncheckedCreateWithoutOptionInputObjectSchema } from './QuestionUncheckedCreateWithoutOptionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutOptionInput> = z
  .object({
    where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutOptionInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutOptionInputObjectSchema),
    ]),
  })
  .strict();

export const QuestionCreateOrConnectWithoutOptionInputObjectSchema = Schema;
