import { z } from 'zod';
import { AnswerCreateWithoutUserInputObjectSchema } from './AnswerCreateWithoutUserInput.schema';
import { AnswerUncheckedCreateWithoutUserInputObjectSchema } from './AnswerUncheckedCreateWithoutUserInput.schema';
import { AnswerCreateOrConnectWithoutUserInputObjectSchema } from './AnswerCreateOrConnectWithoutUserInput.schema';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerCreateNestedManyWithoutUserInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => AnswerCreateWithoutUserInputObjectSchema),
          z.lazy(() => AnswerCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => AnswerUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => AnswerUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => AnswerCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => AnswerCreateOrConnectWithoutUserInputObjectSchema)
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

export const AnswerCreateNestedManyWithoutUserInputObjectSchema = Schema;
