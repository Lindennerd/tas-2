import { z } from 'zod';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerUpdateWithoutUserInputObjectSchema } from './AnswerUpdateWithoutUserInput.schema';
import { AnswerUncheckedUpdateWithoutUserInputObjectSchema } from './AnswerUncheckedUpdateWithoutUserInput.schema';
import { AnswerCreateWithoutUserInputObjectSchema } from './AnswerCreateWithoutUserInput.schema';
import { AnswerUncheckedCreateWithoutUserInputObjectSchema } from './AnswerUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => AnswerUpdateWithoutUserInputObjectSchema),
      z.lazy(() => AnswerUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AnswerCreateWithoutUserInputObjectSchema),
      z.lazy(() => AnswerUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AnswerUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
