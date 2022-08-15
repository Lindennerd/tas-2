import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { AnswerUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema } from './AnswerUncheckedUpdateManyWithoutQuestionNestedInput.schema';
import { OptionUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema } from './OptionUncheckedUpdateManyWithoutQuestionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUncheckedUpdateWithoutExtensionsInput> =
  z
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
      sectionId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
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
    })
    .strict();

export const QuestionUncheckedUpdateWithoutExtensionsInputObjectSchema = Schema;
