import { z } from 'zod';
import { QuestionCreateWithoutSectionInputObjectSchema } from './QuestionCreateWithoutSectionInput.schema';
import { QuestionUncheckedCreateWithoutSectionInputObjectSchema } from './QuestionUncheckedCreateWithoutSectionInput.schema';
import { QuestionCreateOrConnectWithoutSectionInputObjectSchema } from './QuestionCreateOrConnectWithoutSectionInput.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateNestedManyWithoutSectionInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutSectionInputObjectSchema),
          z.lazy(() => QuestionCreateWithoutSectionInputObjectSchema).array(),
          z.lazy(() => QuestionUncheckedCreateWithoutSectionInputObjectSchema),
          z
            .lazy(() => QuestionUncheckedCreateWithoutSectionInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => QuestionCreateOrConnectWithoutSectionInputObjectSchema),
          z
            .lazy(() => QuestionCreateOrConnectWithoutSectionInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => QuestionWhereUniqueInputObjectSchema),
          z.lazy(() => QuestionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const QuestionCreateNestedManyWithoutSectionInputObjectSchema = Schema;
