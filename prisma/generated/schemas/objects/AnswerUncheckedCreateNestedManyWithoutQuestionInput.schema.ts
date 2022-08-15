import { z } from 'zod';
import { AnswerCreateWithoutQuestionInputObjectSchema } from './AnswerCreateWithoutQuestionInput.schema';
import { AnswerUncheckedCreateWithoutQuestionInputObjectSchema } from './AnswerUncheckedCreateWithoutQuestionInput.schema';
import { AnswerCreateOrConnectWithoutQuestionInputObjectSchema } from './AnswerCreateOrConnectWithoutQuestionInput.schema';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUncheckedCreateNestedManyWithoutQuestionInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => AnswerCreateWithoutQuestionInputObjectSchema),
          z.lazy(() => AnswerCreateWithoutQuestionInputObjectSchema).array(),
          z.lazy(() => AnswerUncheckedCreateWithoutQuestionInputObjectSchema),
          z
            .lazy(() => AnswerUncheckedCreateWithoutQuestionInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => AnswerCreateOrConnectWithoutQuestionInputObjectSchema),
          z
            .lazy(() => AnswerCreateOrConnectWithoutQuestionInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => AnswerWhereUniqueInputObjectSchema),
          z.lazy(() => AnswerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const AnswerUncheckedCreateNestedManyWithoutQuestionInputObjectSchema =
  Schema;
