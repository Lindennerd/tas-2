import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SectionUncheckedUpdateManyWithoutManifestNestedInputObjectSchema } from './SectionUncheckedUpdateManyWithoutManifestNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ManifestUpdateUncheckedUpdateManyWithoutManifestNestedInputObjectSchema } from './ManifestUpdateUncheckedUpdateManyWithoutManifestNestedInput.schema';
import { AttachmentUncheckedUpdateManyWithoutManifestNestedInputObjectSchema } from './AttachmentUncheckedUpdateManyWithoutManifestNestedInput.schema';
import { AnswerUncheckedUpdateManyWithoutManifestNestedInputObjectSchema } from './AnswerUncheckedUpdateManyWithoutManifestNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUncheckedUpdateWithoutAssetInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    userId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    sections: z
      .lazy(
        () => SectionUncheckedUpdateManyWithoutManifestNestedInputObjectSchema,
      )
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    ManifestUpdate: z
      .lazy(
        () =>
          ManifestUpdateUncheckedUpdateManyWithoutManifestNestedInputObjectSchema,
      )
      .optional(),
    Attachment: z
      .lazy(
        () =>
          AttachmentUncheckedUpdateManyWithoutManifestNestedInputObjectSchema,
      )
      .optional(),
    Answer: z
      .lazy(
        () => AnswerUncheckedUpdateManyWithoutManifestNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ManifestUncheckedUpdateWithoutAssetInputObjectSchema = Schema;
