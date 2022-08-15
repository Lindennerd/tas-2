import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionCreateWithoutExtensionsInputObjectSchema } from './QuestionCreateWithoutExtensionsInput.schema';
import { QuestionUncheckedCreateWithoutExtensionsInputObjectSchema } from './QuestionUncheckedCreateWithoutExtensionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutExtensionsInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => QuestionCreateWithoutExtensionsInputObjectSchema),
        z.lazy(() => QuestionUncheckedCreateWithoutExtensionsInputObjectSchema),
      ]),
    })
    .strict();

export const QuestionCreateOrConnectWithoutExtensionsInputObjectSchema = Schema;
