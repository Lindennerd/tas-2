import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutAssetNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutAssetNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AssetUpdateUpdateManyWithoutAssetNestedInputObjectSchema } from './AssetUpdateUpdateManyWithoutAssetNestedInput.schema';
import { ManifestUpdateManyWithoutAssetNestedInputObjectSchema } from './ManifestUpdateManyWithoutAssetNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateInput> = z
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
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    url: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutAssetNestedInputObjectSchema)
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    AssetUpdate: z
      .lazy(() => AssetUpdateUpdateManyWithoutAssetNestedInputObjectSchema)
      .optional(),
    Manifest: z
      .lazy(() => ManifestUpdateManyWithoutAssetNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const AssetUpdateInputObjectSchema = Schema;
