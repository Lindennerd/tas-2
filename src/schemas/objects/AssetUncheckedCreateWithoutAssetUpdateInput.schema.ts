import { z } from 'zod';
import { ManifestUncheckedCreateNestedManyWithoutAssetInputObjectSchema } from './ManifestUncheckedCreateNestedManyWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUncheckedCreateWithoutAssetUpdateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    url: z.string().optional().nullable(),
    userId: z.string(),
    createdAt: z.date().optional(),
    Manifest: z
      .lazy(
        () => ManifestUncheckedCreateNestedManyWithoutAssetInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AssetUncheckedCreateWithoutAssetUpdateInputObjectSchema = Schema;
