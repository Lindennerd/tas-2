import { z } from 'zod';
import { QuestionCreateWithoutExtensionsInputObjectSchema } from './QuestionCreateWithoutExtensionsInput.schema';
import { QuestionUncheckedCreateWithoutExtensionsInputObjectSchema } from './QuestionUncheckedCreateWithoutExtensionsInput.schema';
import { QuestionCreateOrConnectWithoutExtensionsInputObjectSchema } from './QuestionCreateOrConnectWithoutExtensionsInput.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateNestedOneWithoutExtensionsInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutExtensionsInputObjectSchema),
          z.lazy(
            () => QuestionUncheckedCreateWithoutExtensionsInputObjectSchema,
          ),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => QuestionCreateOrConnectWithoutExtensionsInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
    }),
  ]);

export const QuestionCreateNestedOneWithoutExtensionsInputObjectSchema = Schema;
