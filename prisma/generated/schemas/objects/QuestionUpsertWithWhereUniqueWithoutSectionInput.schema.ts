import { z } from 'zod';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutSectionInputObjectSchema } from './QuestionUpdateWithoutSectionInput.schema';
import { QuestionUncheckedUpdateWithoutSectionInputObjectSchema } from './QuestionUncheckedUpdateWithoutSectionInput.schema';
import { QuestionCreateWithoutSectionInputObjectSchema } from './QuestionCreateWithoutSectionInput.schema';
import { QuestionUncheckedCreateWithoutSectionInputObjectSchema } from './QuestionUncheckedCreateWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpsertWithWhereUniqueWithoutSectionInput> =
  z
    .object({
      where: z.lazy(() => QuestionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => QuestionUpdateWithoutSectionInputObjectSchema),
        z.lazy(() => QuestionUncheckedUpdateWithoutSectionInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => QuestionCreateWithoutSectionInputObjectSchema),
        z.lazy(() => QuestionUncheckedCreateWithoutSectionInputObjectSchema),
      ]),
    })
    .strict();

export const QuestionUpsertWithWhereUniqueWithoutSectionInputObjectSchema =
  Schema;
