import { z } from 'zod';
import { AssetCreateWithoutManifestInputObjectSchema } from './AssetCreateWithoutManifestInput.schema';
import { AssetUncheckedCreateWithoutManifestInputObjectSchema } from './AssetUncheckedCreateWithoutManifestInput.schema';
import { AssetCreateOrConnectWithoutManifestInputObjectSchema } from './AssetCreateOrConnectWithoutManifestInput.schema';
import { AssetWhereUniqueInputObjectSchema } from './AssetWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetCreateNestedOneWithoutManifestInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => AssetCreateWithoutManifestInputObjectSchema),
          z.lazy(() => AssetUncheckedCreateWithoutManifestInputObjectSchema),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => AssetCreateOrConnectWithoutManifestInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => AssetWhereUniqueInputObjectSchema).optional(),
    }),
  ]);

export const AssetCreateNestedOneWithoutManifestInputObjectSchema = Schema;
