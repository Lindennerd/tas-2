import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { QuestionUpdateOneRequiredWithoutAnswerNestedInputObjectSchema } from './QuestionUpdateOneRequiredWithoutAnswerNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutAnswerNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutAnswerNestedInput.schema';
import { CommentUpdateManyWithoutAnswerNestedInputObjectSchema } from './CommentUpdateManyWithoutAnswerNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUpdateWithoutManifestInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    value: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    question: z
      .lazy(() => QuestionUpdateOneRequiredWithoutAnswerNestedInputObjectSchema)
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutAnswerNestedInputObjectSchema)
      .optional(),
    Comment: z
      .lazy(() => CommentUpdateManyWithoutAnswerNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const AnswerUpdateWithoutManifestInputObjectSchema = Schema;
