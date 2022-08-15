import { z } from 'zod';
import { AssetUpdateUncheckedCreateNestedManyWithoutAssetInputObjectSchema } from './AssetUpdateUncheckedCreateNestedManyWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUncheckedCreateWithoutManifestInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    url: z.string().optional().nullable(),
    userId: z.string(),
    createdAt: z.date().optional(),
    AssetUpdate: z
      .lazy(
        () => AssetUpdateUncheckedCreateNestedManyWithoutAssetInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AssetUncheckedCreateWithoutManifestInputObjectSchema = Schema;
