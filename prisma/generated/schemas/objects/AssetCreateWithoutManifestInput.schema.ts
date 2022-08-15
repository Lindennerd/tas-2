import { z } from 'zod';
import { UserCreateNestedOneWithoutAssetInputObjectSchema } from './UserCreateNestedOneWithoutAssetInput.schema';
import { AssetUpdateCreateNestedManyWithoutAssetInputObjectSchema } from './AssetUpdateCreateNestedManyWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetCreateWithoutManifestInput> = z
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
  })
  .strict();

export const AssetCreateWithoutManifestInputObjectSchema = Schema;
