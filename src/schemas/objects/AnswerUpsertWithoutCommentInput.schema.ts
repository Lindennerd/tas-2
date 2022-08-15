import { z } from 'zod';
import { AnswerUpdateWithoutCommentInputObjectSchema } from './AnswerUpdateWithoutCommentInput.schema';
import { AnswerUncheckedUpdateWithoutCommentInputObjectSchema } from './AnswerUncheckedUpdateWithoutCommentInput.schema';
import { AnswerCreateWithoutCommentInputObjectSchema } from './AnswerCreateWithoutCommentInput.schema';
import { AnswerUncheckedCreateWithoutCommentInputObjectSchema } from './AnswerUncheckedCreateWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUpsertWithoutCommentInput> = z
  .object({
    update: z.union([
      z.lazy(() => AnswerUpdateWithoutCommentInputObjectSchema),
      z.lazy(() => AnswerUncheckedUpdateWithoutCommentInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AnswerCreateWithoutCommentInputObjectSchema),
      z.lazy(() => AnswerUncheckedCreateWithoutCommentInputObjectSchema),
    ]),
  })
  .strict();

export const AnswerUpsertWithoutCommentInputObjectSchema = Schema;
