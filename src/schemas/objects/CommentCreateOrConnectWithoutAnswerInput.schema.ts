import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentCreateWithoutAnswerInputObjectSchema } from './CommentCreateWithoutAnswerInput.schema';
import { CommentUncheckedCreateWithoutAnswerInputObjectSchema } from './CommentUncheckedCreateWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateOrConnectWithoutAnswerInput> = z
  .object({
    where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CommentCreateWithoutAnswerInputObjectSchema),
      z.lazy(() => CommentUncheckedCreateWithoutAnswerInputObjectSchema),
    ]),
  })
  .strict();

export const CommentCreateOrConnectWithoutAnswerInputObjectSchema = Schema;
