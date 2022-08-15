import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutSectionInputObjectSchema } from './QuestionUpdateWithoutSectionInput.schema';
import { QuestionUncheckedUpdateWithoutSectionInputObjectSchema } from './QuestionUncheckedUpdateWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateWithWhereUniqueWithoutSectionInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => QuestionUpdateWithoutSectionInputObjectSchema),
        z.lazy(() => QuestionUncheckedUpdateWithoutSectionInputObjectSchema),
      ]),
    })
    .strict();

export const QuestionUpdateWithWhereUniqueWithoutSectionInputObjectSchema =
  Schema;
