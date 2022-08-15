import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { AccountUpdateManyWithoutUserNestedInputObjectSchema } from './AccountUpdateManyWithoutUserNestedInput.schema';
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from './SessionUpdateManyWithoutUserNestedInput.schema';
import { AssetUpdateManyWithoutUserNestedInputObjectSchema } from './AssetUpdateManyWithoutUserNestedInput.schema';
import { AssetUpdateUpdateManyWithoutUserNestedInputObjectSchema } from './AssetUpdateUpdateManyWithoutUserNestedInput.schema';
import { ManifestUpdateManyWithoutUserNestedInputObjectSchema } from './ManifestUpdateManyWithoutUserNestedInput.schema';
import { ManifestUpdateUpdateManyWithoutUserNestedInputObjectSchema } from './ManifestUpdateUpdateManyWithoutUserNestedInput.schema';
import { AnswerUpdateManyWithoutUserNestedInputObjectSchema } from './AnswerUpdateManyWithoutUserNestedInput.schema';
import { CommentUpdateManyWithoutUserNestedInputObjectSchema } from './CommentUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithoutAttachmentInput> = z
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
    accounts: z
      .lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    Asset: z
      .lazy(() => AssetUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    AssetUpdate: z
      .lazy(() => AssetUpdateUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    Manifest: z
      .lazy(() => ManifestUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    ManifestUpdate: z
      .lazy(() => ManifestUpdateUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    Answer: z
      .lazy(() => AnswerUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    Comment: z
      .lazy(() => CommentUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUpdateWithoutAttachmentInputObjectSchema = Schema;
