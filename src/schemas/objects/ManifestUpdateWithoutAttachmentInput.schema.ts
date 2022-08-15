import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AssetUpdateOneRequiredWithoutManifestNestedInputObjectSchema } from './AssetUpdateOneRequiredWithoutManifestNestedInput.schema';
import { UserUpdateOneRequiredWithoutManifestNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutManifestNestedInput.schema';
import { SectionUpdateManyWithoutManifestNestedInputObjectSchema } from './SectionUpdateManyWithoutManifestNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ManifestUpdateUpdateManyWithoutManifestNestedInputObjectSchema } from './ManifestUpdateUpdateManyWithoutManifestNestedInput.schema';
import { AnswerUpdateManyWithoutManifestNestedInputObjectSchema } from './AnswerUpdateManyWithoutManifestNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateWithoutAttachmentInput> = z
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
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutManifestNestedInputObjectSchema)
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
    Answer: z
      .lazy(() => AnswerUpdateManyWithoutManifestNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ManifestUpdateWithoutAttachmentInputObjectSchema = Schema;
