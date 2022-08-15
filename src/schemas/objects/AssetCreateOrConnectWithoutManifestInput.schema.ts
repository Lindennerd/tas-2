import { z } from 'zod';
import { AssetWhereUniqueInputObjectSchema } from './AssetWhereUniqueInput.schema';
import { AssetCreateWithoutManifestInputObjectSchema } from './AssetCreateWithoutManifestInput.schema';
import { AssetUncheckedCreateWithoutManifestInputObjectSchema } from './AssetUncheckedCreateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetCreateOrConnectWithoutManifestInput> = z
  .object({
    where: z.lazy(() => AssetWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AssetCreateWithoutManifestInputObjectSchema),
      z.lazy(() => AssetUncheckedCreateWithoutManifestInputObjectSchema),
    ]),
  })
  .strict();

export const AssetCreateOrConnectWithoutManifestInputObjectSchema = Schema;
