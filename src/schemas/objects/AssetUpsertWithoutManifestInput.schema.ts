import { z } from 'zod';
import { AssetUpdateWithoutManifestInputObjectSchema } from './AssetUpdateWithoutManifestInput.schema';
import { AssetUncheckedUpdateWithoutManifestInputObjectSchema } from './AssetUncheckedUpdateWithoutManifestInput.schema';
import { AssetCreateWithoutManifestInputObjectSchema } from './AssetCreateWithoutManifestInput.schema';
import { AssetUncheckedCreateWithoutManifestInputObjectSchema } from './AssetUncheckedCreateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpsertWithoutManifestInput> = z
  .object({
    update: z.union([
      z.lazy(() => AssetUpdateWithoutManifestInputObjectSchema),
      z.lazy(() => AssetUncheckedUpdateWithoutManifestInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AssetCreateWithoutManifestInputObjectSchema),
      z.lazy(() => AssetUncheckedCreateWithoutManifestInputObjectSchema),
    ]),
  })
  .strict();

export const AssetUpsertWithoutManifestInputObjectSchema = Schema;
