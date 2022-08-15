import { z } from 'zod';
import { SectionCreateNestedOneWithoutQuestionsInputObjectSchema } from './SectionCreateNestedOneWithoutQuestionsInput.schema';
import { OptionCreateNestedManyWithoutQuestionInputObjectSchema } from './OptionCreateNestedManyWithoutQuestionInput.schema';
import { ExtensionsCreateNestedManyWithoutQuestionInputObjectSchema } from './ExtensionsCreateNestedManyWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateWithoutAnswerInput> = z
  .object({
    id: z.string().optional(),
    description: z.string(),
    help: z.string().optional().nullable(),
    type: z.string(),
    weight: z.number(),
    Section: z
      .lazy(() => SectionCreateNestedOneWithoutQuestionsInputObjectSchema)
      .optional(),
    Option: z
      .lazy(() => OptionCreateNestedManyWithoutQuestionInputObjectSchema)
      .optional(),
    Extensions: z
      .lazy(() => ExtensionsCreateNestedManyWithoutQuestionInputObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionCreateWithoutAnswerInputObjectSchema = Schema;
