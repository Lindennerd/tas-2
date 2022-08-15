import { z } from 'zod';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerUpdateWithoutQuestionInputObjectSchema } from './AnswerUpdateWithoutQuestionInput.schema';
import { AnswerUncheckedUpdateWithoutQuestionInputObjectSchema } from './AnswerUncheckedUpdateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUpdateWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AnswerUpdateWithoutQuestionInputObjectSchema),
        z.lazy(() => AnswerUncheckedUpdateWithoutQuestionInputObjectSchema),
      ]),
    })
    .strict();

export const AnswerUpdateWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema;
