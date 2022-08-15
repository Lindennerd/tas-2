import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionCreateWithoutSectionInputObjectSchema } from './QuestionCreateWithoutSectionInput.schema';
import { QuestionUncheckedCreateWithoutSectionInputObjectSchema } from './QuestionUncheckedCreateWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateOrConnectWithoutSectionInput> = z
  .object({
    where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => QuestionCreateWithoutSectionInputObjectSchema),
      z.lazy(() => QuestionUncheckedCreateWithoutSectionInputObjectSchema),
    ]),
  })
  .strict();

export const QuestionCreateOrConnectWithoutSectionInputObjectSchema = Schema;
