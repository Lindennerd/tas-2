import { z } from 'zod';
import { AssetCreateNestedOneWithoutAssetUpdateInputObjectSchema } from './AssetCreateNestedOneWithoutAssetUpdateInput.schema';
import { UserCreateNestedOneWithoutAssetUpdateInputObjectSchema } from './UserCreateNestedOneWithoutAssetUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateCreateInput> = z
  .object({
    id: z.string().optional(),
    asset: z.lazy(
      () => AssetCreateNestedOneWithoutAssetUpdateInputObjectSchema,
    ),
    user: z.lazy(() => UserCreateNestedOneWithoutAssetUpdateInputObjectSchema),
    updatedAt: z.date().optional(),
  })
  .strict();

export const AssetUpdateCreateInputObjectSchema = Schema;
