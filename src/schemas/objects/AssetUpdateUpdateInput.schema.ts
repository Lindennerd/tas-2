import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AssetUpdateOneRequiredWithoutAssetUpdateNestedInputObjectSchema } from './AssetUpdateOneRequiredWithoutAssetUpdateNestedInput.schema';
import { UserUpdateOneRequiredWithoutAssetUpdateNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutAssetUpdateNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    asset: z
      .lazy(
        () => AssetUpdateOneRequiredWithoutAssetUpdateNestedInputObjectSchema,
      )
      .optional(),
    user: z
      .lazy(
        () => UserUpdateOneRequiredWithoutAssetUpdateNestedInputObjectSchema,
      )
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const AssetUpdateUpdateInputObjectSchema = Schema;
