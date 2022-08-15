import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ManifestUpdateOneRequiredWithoutManifestUpdateNestedInputObjectSchema } from './ManifestUpdateOneRequiredWithoutManifestUpdateNestedInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateUpdateWithoutUserInput> = z
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
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ManifestUpdateUpdateWithoutUserInputObjectSchema = Schema;
