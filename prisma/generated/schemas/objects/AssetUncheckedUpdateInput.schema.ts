import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AssetUpdateUncheckedUpdateManyWithoutAssetNestedInputObjectSchema } from './AssetUpdateUncheckedUpdateManyWithoutAssetNestedInput.schema';
import { ManifestUncheckedUpdateManyWithoutAssetNestedInputObjectSchema } from './ManifestUncheckedUpdateManyWithoutAssetNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUncheckedUpdateInput> = z
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
    userId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    AssetUpdate: z
      .lazy(
        () => AssetUpdateUncheckedUpdateManyWithoutAssetNestedInputObjectSchema,
      )
      .optional(),
    Manifest: z
      .lazy(
        () => ManifestUncheckedUpdateManyWithoutAssetNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AssetUncheckedUpdateInputObjectSchema = Schema;
