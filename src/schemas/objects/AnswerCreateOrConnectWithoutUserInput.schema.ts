import { z } from 'zod';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerCreateWithoutUserInputObjectSchema } from './AnswerCreateWithoutUserInput.schema';
import { AnswerUncheckedCreateWithoutUserInputObjectSchema } from './AnswerUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AnswerCreateWithoutUserInputObjectSchema),
      z.lazy(() => AnswerUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AnswerCreateOrConnectWithoutUserInputObjectSchema = Schema;
