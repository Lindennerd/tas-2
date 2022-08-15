import { z } from 'zod';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';
import { ManifestUpdateWithoutAssetInputObjectSchema } from './ManifestUpdateWithoutAssetInput.schema';
import { ManifestUncheckedUpdateWithoutAssetInputObjectSchema } from './ManifestUncheckedUpdateWithoutAssetInput.schema';
import { ManifestCreateWithoutAssetInputObjectSchema } from './ManifestCreateWithoutAssetInput.schema';
import { ManifestUncheckedCreateWithoutAssetInputObjectSchema } from './ManifestUncheckedCreateWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpsertWithWhereUniqueWithoutAssetInput> =
  z
    .object({
      where: z.lazy(() => ManifestWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ManifestUpdateWithoutAssetInputObjectSchema),
        z.lazy(() => ManifestUncheckedUpdateWithoutAssetInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ManifestCreateWithoutAssetInputObjectSchema),
        z.lazy(() => ManifestUncheckedCreateWithoutAssetInputObjectSchema),
      ]),
    })
    .strict();

export const ManifestUpsertWithWhereUniqueWithoutAssetInputObjectSchema =
  Schema;
