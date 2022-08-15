import { z } from 'zod';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerUpdateWithoutQuestionInputObjectSchema } from './AnswerUpdateWithoutQuestionInput.schema';
import { AnswerUncheckedUpdateWithoutQuestionInputObjectSchema } from './AnswerUncheckedUpdateWithoutQuestionInput.schema';
import { AnswerCreateWithoutQuestionInputObjectSchema } from './AnswerCreateWithoutQuestionInput.schema';
import { AnswerUncheckedCreateWithoutQuestionInputObjectSchema } from './AnswerUncheckedCreateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUpsertWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AnswerUpdateWithoutQuestionInputObjectSchema),
        z.lazy(() => AnswerUncheckedUpdateWithoutQuestionInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => AnswerCreateWithoutQuestionInputObjectSchema),
        z.lazy(() => AnswerUncheckedCreateWithoutQuestionInputObjectSchema),
      ]),
    })
    .strict();

export const AnswerUpsertWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema;
