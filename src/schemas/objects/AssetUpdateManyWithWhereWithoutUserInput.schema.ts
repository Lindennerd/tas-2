import { z } from 'zod';
import { AssetScalarWhereInputObjectSchema } from './AssetScalarWhereInput.schema';
import { AssetUpdateManyMutationInputObjectSchema } from './AssetUpdateManyMutationInput.schema';
import { AssetUncheckedUpdateManyWithoutAssetInputObjectSchema } from './AssetUncheckedUpdateManyWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => AssetScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => AssetUpdateManyMutationInputObjectSchema),
      z.lazy(() => AssetUncheckedUpdateManyWithoutAssetInputObjectSchema),
    ]),
  })
  .strict();

export const AssetUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
