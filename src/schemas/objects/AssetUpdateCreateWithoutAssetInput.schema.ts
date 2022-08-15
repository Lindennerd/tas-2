import { z } from 'zod';
import { UserCreateNestedOneWithoutAssetUpdateInputObjectSchema } from './UserCreateNestedOneWithoutAssetUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateCreateWithoutAssetInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutAssetUpdateInputObjectSchema),
    updatedAt: z.date().optional(),
  })
  .strict();

export const AssetUpdateCreateWithoutAssetInputObjectSchema = Schema;
