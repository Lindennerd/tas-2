import { z } from 'zod';
import { SectionWhereUniqueInputObjectSchema } from './SectionWhereUniqueInput.schema';
import { SectionCreateWithoutQuestionsInputObjectSchema } from './SectionCreateWithoutQuestionsInput.schema';
import { SectionUncheckedCreateWithoutQuestionsInputObjectSchema } from './SectionUncheckedCreateWithoutQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionCreateOrConnectWithoutQuestionsInput> = z
  .object({
    where: z.lazy(() => SectionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SectionCreateWithoutQuestionsInputObjectSchema),
      z.lazy(() => SectionUncheckedCreateWithoutQuestionsInputObjectSchema),
    ]),
  })
  .strict();

export const SectionCreateOrConnectWithoutQuestionsInputObjectSchema = Schema;
