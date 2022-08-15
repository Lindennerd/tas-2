import { z } from 'zod';
import { QuestionUncheckedCreateNestedManyWithoutSectionInputObjectSchema } from './QuestionUncheckedCreateNestedManyWithoutSectionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    questions: z
      .lazy(
        () => QuestionUncheckedCreateNestedManyWithoutSectionInputObjectSchema,
      )
      .optional(),
    manifestId: z.string().optional().nullable(),
  })
  .strict();

export const SectionUncheckedCreateInputObjectSchema = Schema;
