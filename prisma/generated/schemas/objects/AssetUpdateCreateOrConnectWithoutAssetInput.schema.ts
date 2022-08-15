import { z } from 'zod';
import { AssetUpdateWhereUniqueInputObjectSchema } from './AssetUpdateWhereUniqueInput.schema';
import { AssetUpdateCreateWithoutAssetInputObjectSchema } from './AssetUpdateCreateWithoutAssetInput.schema';
import { AssetUpdateUncheckedCreateWithoutAssetInputObjectSchema } from './AssetUpdateUncheckedCreateWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateCreateOrConnectWithoutAssetInput> = z
  .object({
    where: z.lazy(() => AssetUpdateWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AssetUpdateCreateWithoutAssetInputObjectSchema),
      z.lazy(() => AssetUpdateUncheckedCreateWithoutAssetInputObjectSchema),
    ]),
  })
  .strict();

export const AssetUpdateCreateOrConnectWithoutAssetInputObjectSchema = Schema;
