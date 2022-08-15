import { z } from 'zod';
import { SectionCreateNestedOneWithoutQuestionsInputObjectSchema } from './SectionCreateNestedOneWithoutQuestionsInput.schema';
import { AnswerCreateNestedManyWithoutQuestionInputObjectSchema } from './AnswerCreateNestedManyWithoutQuestionInput.schema';
import { OptionCreateNestedManyWithoutQuestionInputObjectSchema } from './OptionCreateNestedManyWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionCreateWithoutExtensionsInput> = z
  .object({
    id: z.string().optional(),
    description: z.string(),
    help: z.string().optional().nullable(),
    type: z.string(),
    weight: z.number(),
    Section: z
      .lazy(() => SectionCreateNestedOneWithoutQuestionsInputObjectSchema)
      .optional(),
    Answer: z
      .lazy(() => AnswerCreateNestedManyWithoutQuestionInputObjectSchema)
      .optional(),
    Option: z
      .lazy(() => OptionCreateNestedManyWithoutQuestionInputObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionCreateWithoutExtensionsInputObjectSchema = Schema;
