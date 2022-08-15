import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ManifestUpdateOneRequiredWithoutManifestUpdateNestedInputObjectSchema } from './ManifestUpdateOneRequiredWithoutManifestUpdateNestedInput.schema';
import { UserUpdateOneRequiredWithoutManifestUpdateNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutManifestUpdateNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    manifest: z
      .lazy(
        () =>
          ManifestUpdateOneRequiredWithoutManifestUpdateNestedInputObjectSchema,
      )
      .optional(),
    user: z
      .lazy(
        () => UserUpdateOneRequiredWithoutManifestUpdateNestedInputObjectSchema,
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

export const ManifestUpdateUpdateInputObjectSchema = Schema;
