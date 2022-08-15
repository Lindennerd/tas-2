import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AssetUpdateOneRequiredWithoutManifestNestedInputObjectSchema } from './AssetUpdateOneRequiredWithoutManifestNestedInput.schema';
import { SectionUpdateManyWithoutManifestNestedInputObjectSchema } from './SectionUpdateManyWithoutManifestNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ManifestUpdateUpdateManyWithoutManifestNestedInputObjectSchema } from './ManifestUpdateUpdateManyWithoutManifestNestedInput.schema';
import { AttachmentUpdateManyWithoutManifestNestedInputObjectSchema } from './AttachmentUpdateManyWithoutManifestNestedInput.schema';
import { AnswerUpdateManyWithoutManifestNestedInputObjectSchema } from './AnswerUpdateManyWithoutManifestNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateWithoutUserInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    asset: z
      .lazy(() => AssetUpdateOneRequiredWithoutManifestNestedInputObjectSchema)
      .optional(),
    sections: z
      .lazy(() => SectionUpdateManyWithoutManifestNestedInputObjectSchema)
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    ManifestUpdate: z
      .lazy(
        () => ManifestUpdateUpdateManyWithoutManifestNestedInputObjectSchema,
      )
      .optional(),
    Attachment: z
      .lazy(() => AttachmentUpdateManyWithoutManifestNestedInputObjectSchema)
      .optional(),
    Answer: z
      .lazy(() => AnswerUpdateManyWithoutManifestNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ManifestUpdateWithoutUserInputObjectSchema = Schema;
