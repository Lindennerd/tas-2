import { z } from 'zod';
import { AssetUpdateUncheckedCreateNestedManyWithoutAssetInputObjectSchema } from './AssetUpdateUncheckedCreateNestedManyWithoutAssetInput.schema';
import { ManifestUncheckedCreateNestedManyWithoutAssetInputObjectSchema } from './ManifestUncheckedCreateNestedManyWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    url: z.string().optional().nullable(),
    createdAt: z.date().optional(),
    AssetUpdate: z
      .lazy(
        () => AssetUpdateUncheckedCreateNestedManyWithoutAssetInputObjectSchema,
      )
      .optional(),
    Manifest: z
      .lazy(
        () => ManifestUncheckedCreateNestedManyWithoutAssetInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AssetUncheckedCreateWithoutUserInputObjectSchema = Schema;
