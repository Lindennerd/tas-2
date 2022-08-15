import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutAnswerInputObjectSchema } from './CommentUpdateWithoutAnswerInput.schema';
import { CommentUncheckedUpdateWithoutAnswerInputObjectSchema } from './CommentUncheckedUpdateWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutAnswerInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CommentUpdateWithoutAnswerInputObjectSchema),
        z.lazy(() => CommentUncheckedUpdateWithoutAnswerInputObjectSchema),
      ]),
    })
    .strict();

export const CommentUpdateWithWhereUniqueWithoutAnswerInputObjectSchema =
  Schema;
