import { z } from 'zod';
import { AnswerCreateWithoutCommentInputObjectSchema } from './AnswerCreateWithoutCommentInput.schema';
import { AnswerUncheckedCreateWithoutCommentInputObjectSchema } from './AnswerUncheckedCreateWithoutCommentInput.schema';
import { AnswerCreateOrConnectWithoutCommentInputObjectSchema } from './AnswerCreateOrConnectWithoutCommentInput.schema';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerCreateNestedOneWithoutCommentInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => AnswerCreateWithoutCommentInputObjectSchema),
          z.lazy(() => AnswerUncheckedCreateWithoutCommentInputObjectSchema),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => AnswerCreateOrConnectWithoutCommentInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => AnswerWhereUniqueInputObjectSchema).optional(),
    }),
  ]);

export const AnswerCreateNestedOneWithoutCommentInputObjectSchema = Schema;
