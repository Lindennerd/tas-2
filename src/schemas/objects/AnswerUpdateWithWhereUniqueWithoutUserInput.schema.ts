import { z } from 'zod';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerUpdateWithoutUserInputObjectSchema } from './AnswerUpdateWithoutUserInput.schema';
import { AnswerUncheckedUpdateWithoutUserInputObjectSchema } from './AnswerUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => AnswerUpdateWithoutUserInputObjectSchema),
      z.lazy(() => AnswerUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AnswerUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
