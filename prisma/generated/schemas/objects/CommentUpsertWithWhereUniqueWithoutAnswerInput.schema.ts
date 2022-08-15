import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutAnswerInputObjectSchema } from './CommentUpdateWithoutAnswerInput.schema';
import { CommentUncheckedUpdateWithoutAnswerInputObjectSchema } from './CommentUncheckedUpdateWithoutAnswerInput.schema';
import { CommentCreateWithoutAnswerInputObjectSchema } from './CommentCreateWithoutAnswerInput.schema';
import { CommentUncheckedCreateWithoutAnswerInputObjectSchema } from './CommentUncheckedCreateWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutAnswerInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CommentUpdateWithoutAnswerInputObjectSchema),
        z.lazy(() => CommentUncheckedUpdateWithoutAnswerInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => CommentCreateWithoutAnswerInputObjectSchema),
        z.lazy(() => CommentUncheckedCreateWithoutAnswerInputObjectSchema),
      ]),
    })
    .strict();

export const CommentUpsertWithWhereUniqueWithoutAnswerInputObjectSchema =
  Schema;
