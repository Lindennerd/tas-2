import { z } from 'zod';
import { SectionUpdateWithoutQuestionsInputObjectSchema } from './SectionUpdateWithoutQuestionsInput.schema';
import { SectionUncheckedUpdateWithoutQuestionsInputObjectSchema } from './SectionUncheckedUpdateWithoutQuestionsInput.schema';
import { SectionCreateWithoutQuestionsInputObjectSchema } from './SectionCreateWithoutQuestionsInput.schema';
import { SectionUncheckedCreateWithoutQuestionsInputObjectSchema } from './SectionUncheckedCreateWithoutQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionUpsertWithoutQuestionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => SectionUpdateWithoutQuestionsInputObjectSchema),
      z.lazy(() => SectionUncheckedUpdateWithoutQuestionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SectionCreateWithoutQuestionsInputObjectSchema),
      z.lazy(() => SectionUncheckedCreateWithoutQuestionsInputObjectSchema),
    ]),
  })
  .strict();

export const SectionUpsertWithoutQuestionsInputObjectSchema = Schema;
