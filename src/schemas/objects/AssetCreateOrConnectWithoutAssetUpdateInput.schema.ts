import { z } from 'zod';
import { AssetWhereUniqueInputObjectSchema } from './AssetWhereUniqueInput.schema';
import { AssetCreateWithoutAssetUpdateInputObjectSchema } from './AssetCreateWithoutAssetUpdateInput.schema';
import { AssetUncheckedCreateWithoutAssetUpdateInputObjectSchema } from './AssetUncheckedCreateWithoutAssetUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetCreateOrConnectWithoutAssetUpdateInput> = z
  .object({
    where: z.lazy(() => AssetWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AssetCreateWithoutAssetUpdateInputObjectSchema),
      z.lazy(() => AssetUncheckedCreateWithoutAssetUpdateInputObjectSchema),
    ]),
  })
  .strict();

export const AssetCreateOrConnectWithoutAssetUpdateInputObjectSchema = Schema;
