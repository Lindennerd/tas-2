import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { QuestionUpdateManyWithoutSectionNestedInputObjectSchema } from './QuestionUpdateManyWithoutSectionNestedInput.schema';
import { ManifestUpdateOneWithoutSectionsNestedInputObjectSchema } from './ManifestUpdateOneWithoutSectionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionUpdateInput> = z
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
      .lazy(() => QuestionUpdateManyWithoutSectionNestedInputObjectSchema)
      .optional(),
    Manifest: z
      .lazy(() => ManifestUpdateOneWithoutSectionsNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SectionUpdateInputObjectSchema = Schema;
