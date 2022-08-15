import { z } from 'zod';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';
import { ManifestCreateWithoutAssetInputObjectSchema } from './ManifestCreateWithoutAssetInput.schema';
import { ManifestUncheckedCreateWithoutAssetInputObjectSchema } from './ManifestUncheckedCreateWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestCreateOrConnectWithoutAssetInput> = z
  .object({
    where: z.lazy(() => ManifestWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ManifestCreateWithoutAssetInputObjectSchema),
      z.lazy(() => ManifestUncheckedCreateWithoutAssetInputObjectSchema),
    ]),
  })
  .strict();

export const ManifestCreateOrConnectWithoutAssetInputObjectSchema = Schema;
