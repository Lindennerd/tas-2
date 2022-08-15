import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { SectionUpdateOneWithoutQuestionsNestedInputObjectSchema } from './SectionUpdateOneWithoutQuestionsNestedInput.schema';
import { AnswerUpdateManyWithoutQuestionNestedInputObjectSchema } from './AnswerUpdateManyWithoutQuestionNestedInput.schema';
import { ExtensionsUpdateManyWithoutQuestionNestedInputObjectSchema } from './ExtensionsUpdateManyWithoutQuestionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateWithoutOptionInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    help: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    type: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    weight: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Section: z
      .lazy(() => SectionUpdateOneWithoutQuestionsNestedInputObjectSchema)
      .optional(),
    Answer: z
      .lazy(() => AnswerUpdateManyWithoutQuestionNestedInputObjectSchema)
      .optional(),
    Extensions: z
      .lazy(() => ExtensionsUpdateManyWithoutQuestionNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionUpdateWithoutOptionInputObjectSchema = Schema;