import { z } from 'zod';
import { AssetUpdateWhereUniqueInputObjectSchema } from './AssetUpdateWhereUniqueInput.schema';
import { AssetUpdateUpdateWithoutAssetInputObjectSchema } from './AssetUpdateUpdateWithoutAssetInput.schema';
import { AssetUpdateUncheckedUpdateWithoutAssetInputObjectSchema } from './AssetUpdateUncheckedUpdateWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateUpdateWithWhereUniqueWithoutAssetInput> =
  z
    .object({
      where: z.lazy(() => AssetUpdateWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AssetUpdateUpdateWithoutAssetInputObjectSchema),
        z.lazy(() => AssetUpdateUncheckedUpdateWithoutAssetInputObjectSchema),
      ]),
    })
    .strict();

export const AssetUpdateUpdateWithWhereUniqueWithoutAssetInputObjectSchema =
  Schema;
