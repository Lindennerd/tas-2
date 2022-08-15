import { z } from 'zod';
import { UserCreateNestedOneWithoutAssetInputObjectSchema } from './UserCreateNestedOneWithoutAssetInput.schema';
import { AssetUpdateCreateNestedManyWithoutAssetInputObjectSchema } from './AssetUpdateCreateNestedManyWithoutAssetInput.schema';
import { ManifestCreateNestedManyWithoutAssetInputObjectSchema } from './ManifestCreateNestedManyWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    url: z.string().optional().nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutAssetInputObjectSchema),
    createdAt: z.date().optional(),
    AssetUpdate: z
      .lazy(() => AssetUpdateCreateNestedManyWithoutAssetInputObjectSchema)
      .optional(),
    Manifest: z
      .lazy(() => ManifestCreateNestedManyWithoutAssetInputObjectSchema)
      .optional(),
  })
  .strict();

export const AssetCreateInputObjectSchema = Schema;
