import { z } from 'zod';
import { AssetUpdateWhereUniqueInputObjectSchema } from './AssetUpdateWhereUniqueInput.schema';
import { AssetUpdateUpdateWithoutAssetInputObjectSchema } from './AssetUpdateUpdateWithoutAssetInput.schema';
import { AssetUpdateUncheckedUpdateWithoutAssetInputObjectSchema } from './AssetUpdateUncheckedUpdateWithoutAssetInput.schema';
import { AssetUpdateCreateWithoutAssetInputObjectSchema } from './AssetUpdateCreateWithoutAssetInput.schema';
import { AssetUpdateUncheckedCreateWithoutAssetInputObjectSchema } from './AssetUpdateUncheckedCreateWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateUpsertWithWhereUniqueWithoutAssetInput> =
  z
    .object({
      where: z.lazy(() => AssetUpdateWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AssetUpdateUpdateWithoutAssetInputObjectSchema),
        z.lazy(() => AssetUpdateUncheckedUpdateWithoutAssetInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => AssetUpdateCreateWithoutAssetInputObjectSchema),
        z.lazy(() => AssetUpdateUncheckedCreateWithoutAssetInputObjectSchema),
      ]),
    })
    .strict();

export const AssetUpdateUpsertWithWhereUniqueWithoutAssetInputObjectSchema =
  Schema;
