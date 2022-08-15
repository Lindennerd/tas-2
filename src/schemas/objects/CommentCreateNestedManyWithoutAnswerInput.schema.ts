import { z } from 'zod';
import { CommentCreateWithoutAnswerInputObjectSchema } from './CommentCreateWithoutAnswerInput.schema';
import { CommentUncheckedCreateWithoutAnswerInputObjectSchema } from './CommentUncheckedCreateWithoutAnswerInput.schema';
import { CommentCreateOrConnectWithoutAnswerInputObjectSchema } from './CommentCreateOrConnectWithoutAnswerInput.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateNestedManyWithoutAnswerInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutAnswerInputObjectSchema),
          z.lazy(() => CommentCreateWithoutAnswerInputObjectSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutAnswerInputObjectSchema),
          z
            .lazy(() => CommentUncheckedCreateWithoutAnswerInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutAnswerInputObjectSchema),
          z
            .lazy(() => CommentCreateOrConnectWithoutAnswerInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const CommentCreateNestedManyWithoutAnswerInputObjectSchema = Schema;
