import { z } from 'zod';
import { AssetUpdateCreateNestedManyWithoutAssetInputObjectSchema } from './AssetUpdateCreateNestedManyWithoutAssetInput.schema';
import { ManifestCreateNestedManyWithoutAssetInputObjectSchema } from './ManifestCreateNestedManyWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    url: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    AssetUpdate: z
      .lazy(() => AssetUpdateCreateNestedManyWithoutAssetInputObjectSchema)
      .optional(),
    Manifest: z
      .lazy(() => ManifestCreateNestedManyWithoutAssetInputObjectSchema)
      .optional(),
  })
  .strict();

export const AssetCreateWithoutUserInputObjectSchema = Schema;
