import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { QuestionUncheckedUpdateManyWithoutSectionNestedInputObjectSchema } from './QuestionUncheckedUpdateManyWithoutSectionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionUncheckedUpdateWithoutManifestInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    questions: z
      .lazy(
        () => QuestionUncheckedUpdateManyWithoutSectionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SectionUncheckedUpdateWithoutManifestInputObjectSchema = Schema;
