import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { AnswerUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema } from './AnswerUncheckedUpdateManyWithoutQuestionNestedInput.schema';
import { OptionUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema } from './OptionUncheckedUpdateManyWithoutQuestionNestedInput.schema';
import { ExtensionsUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema } from './ExtensionsUncheckedUpdateManyWithoutQuestionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUncheckedUpdateWithoutSectionInput> = z
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
    Answer: z
      .lazy(
        () => AnswerUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema,
      )
      .optional(),
    Option: z
      .lazy(
        () => OptionUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema,
      )
      .optional(),
    Extensions: z
      .lazy(
        () =>
          ExtensionsUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const QuestionUncheckedUpdateWithoutSectionInputObjectSchema = Schema;
