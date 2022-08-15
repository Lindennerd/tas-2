import { z } from 'zod';
import { UserCreateNestedOneWithoutAssetInputObjectSchema } from './UserCreateNestedOneWithoutAssetInput.schema';
import { ManifestCreateNestedManyWithoutAssetInputObjectSchema } from './ManifestCreateNestedManyWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetCreateWithoutAssetUpdateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    url: z.string().optional().nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutAssetInputObjectSchema),
    createdAt: z.date().optional(),
    Manifest: z
      .lazy(() => ManifestCreateNestedManyWithoutAssetInputObjectSchema)
      .optional(),
  })
  .strict();

export const AssetCreateWithoutAssetUpdateInputObjectSchema = Schema;
