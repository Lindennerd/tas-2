import { z } from 'zod';
import { AnswerScalarWhereInputObjectSchema } from './AnswerScalarWhereInput.schema';
import { AnswerUpdateManyMutationInputObjectSchema } from './AnswerUpdateManyMutationInput.schema';
import { AnswerUncheckedUpdateManyWithoutAnswerInputObjectSchema } from './AnswerUncheckedUpdateManyWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUpdateManyWithWhereWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => AnswerScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AnswerUpdateManyMutationInputObjectSchema),
        z.lazy(() => AnswerUncheckedUpdateManyWithoutAnswerInputObjectSchema),
      ]),
    })
    .strict();

export const AnswerUpdateManyWithWhereWithoutQuestionInputObjectSchema = Schema;
