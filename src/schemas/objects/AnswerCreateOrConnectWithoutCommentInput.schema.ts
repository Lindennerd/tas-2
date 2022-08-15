import { z } from 'zod';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerCreateWithoutCommentInputObjectSchema } from './AnswerCreateWithoutCommentInput.schema';
import { AnswerUncheckedCreateWithoutCommentInputObjectSchema } from './AnswerUncheckedCreateWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerCreateOrConnectWithoutCommentInput> = z
  .object({
    where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AnswerCreateWithoutCommentInputObjectSchema),
      z.lazy(() => AnswerUncheckedCreateWithoutCommentInputObjectSchema),
    ]),
  })
  .strict();

export const AnswerCreateOrConnectWithoutCommentInputObjectSchema = Schema;
