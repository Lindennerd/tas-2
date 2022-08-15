import { z } from 'zod';
import { AnswerUncheckedCreateNestedManyWithoutQuestionInputObjectSchema } from './AnswerUncheckedCreateNestedManyWithoutQuestionInput.schema';
import { OptionUncheckedCreateNestedManyWithoutQuestionInputObjectSchema } from './OptionUncheckedCreateNestedManyWithoutQuestionInput.schema';
import { ExtensionsUncheckedCreateNestedManyWithoutQuestionInputObjectSchema } from './ExtensionsUncheckedCreateNestedManyWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    description: z.string(),
    help: z.string().optional().nullable(),
    type: z.string(),
    weight: z.number(),
    sectionId: z.string().optional().nullable(),
    Answer: z
      .lazy(
        () => AnswerUncheckedCreateNestedManyWithoutQuestionInputObjectSchema,
      )
      .optional(),
    Option: z
      .lazy(
        () => OptionUncheckedCreateNestedManyWithoutQuestionInputObjectSchema,
      )
      .optional(),
    Extensions: z
      .lazy(
        () =>
          ExtensionsUncheckedCreateNestedManyWithoutQuestionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const QuestionUncheckedCreateInputObjectSchema = Schema;
