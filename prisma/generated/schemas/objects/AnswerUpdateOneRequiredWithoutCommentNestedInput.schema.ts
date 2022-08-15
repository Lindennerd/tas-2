import { z } from 'zod';
import { AnswerCreateWithoutCommentInputObjectSchema } from './AnswerCreateWithoutCommentInput.schema';
import { AnswerUncheckedCreateWithoutCommentInputObjectSchema } from './AnswerUncheckedCreateWithoutCommentInput.schema';
import { AnswerCreateOrConnectWithoutCommentInputObjectSchema } from './AnswerCreateOrConnectWithoutCommentInput.schema';
import { AnswerUpsertWithoutCommentInputObjectSchema } from './AnswerUpsertWithoutCommentInput.schema';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerUpdateWithoutCommentInputObjectSchema } from './AnswerUpdateWithoutCommentInput.schema';
import { AnswerUncheckedUpdateWithoutCommentInputObjectSchema } from './AnswerUncheckedUpdateWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUpdateOneRequiredWithoutCommentNestedInput> =
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
      upsert: z
        .lazy(() => AnswerUpsertWithoutCommentInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => AnswerWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => AnswerUpdateWithoutCommentInputObjectSchema),
          z.lazy(() => AnswerUncheckedUpdateWithoutCommentInputObjectSchema),
        ])
        .optional(),
    }),
  ]);

export const AnswerUpdateOneRequiredWithoutCommentNestedInputObjectSchema =
  Schema;
