import { z } from 'zod';
import { QuestionCreateWithoutOptionInputObjectSchema } from './QuestionCreateWithoutOptionInput.schema';
import { QuestionUncheckedCreateWithoutOptionInputObjectSchema } from './QuestionUncheckedCreateWithoutOptionInput.schema';
import { QuestionCreateOrConnectWithoutOptionInputObjectSchema } from './QuestionCreateOrConnectWithoutOptionInput.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateNestedOneWithoutOptionInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutOptionInputObjectSchema),
          z.lazy(() => QuestionUncheckedCreateWithoutOptionInputObjectSchema),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => QuestionCreateOrConnectWithoutOptionInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
    }),
  ]);

export const QuestionCreateNestedOneWithoutOptionInputObjectSchema = Schema;
