import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { AssetUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AssetUncheckedUpdateManyWithoutUserNestedInput.schema';
import { AssetUpdateUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AssetUpdateUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ManifestUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ManifestUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ManifestUpdateUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ManifestUpdateUncheckedUpdateManyWithoutUserNestedInput.schema';
import { AttachmentUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AttachmentUncheckedUpdateManyWithoutUserNestedInput.schema';
import { AnswerUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AnswerUncheckedUpdateManyWithoutUserNestedInput.schema';
import { CommentUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './CommentUncheckedUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z
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
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    emailVerified: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    sessions: z
      .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    Asset: z
      .lazy(() => AssetUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    AssetUpdate: z
      .lazy(
        () => AssetUpdateUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
      )
      .optional(),
    Manifest: z
      .lazy(() => ManifestUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    ManifestUpdate: z
      .lazy(
        () =>
          ManifestUpdateUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
      )
      .optional(),
    Attachment: z
      .lazy(
        () => AttachmentUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
      )
      .optional(),
    Answer: z
      .lazy(() => AnswerUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    Comment: z
      .lazy(() => CommentUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateWithoutAccountsInputObjectSchema = Schema;
