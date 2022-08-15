import { z } from 'zod';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';
import { ManifestUpdateWithoutAssetInputObjectSchema } from './ManifestUpdateWithoutAssetInput.schema';
import { ManifestUncheckedUpdateWithoutAssetInputObjectSchema } from './ManifestUncheckedUpdateWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateWithWhereUniqueWithoutAssetInput> =
  z
    .object({
      where: z.lazy(() => ManifestWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ManifestUpdateWithoutAssetInputObjectSchema),
        z.lazy(() => ManifestUncheckedUpdateWithoutAssetInputObjectSchema),
      ]),
    })
    .strict();

export const ManifestUpdateWithWhereUniqueWithoutAssetInputObjectSchema =
  Schema;
