import { z } from 'zod';
import { AssetUpdateScalarWhereInputObjectSchema } from './AssetUpdateScalarWhereInput.schema';
import { AssetUpdateUpdateManyMutationInputObjectSchema } from './AssetUpdateUpdateManyMutationInput.schema';
import { AssetUpdateUncheckedUpdateManyWithoutAssetUpdateInputObjectSchema } from './AssetUpdateUncheckedUpdateManyWithoutAssetUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AssetUpdateScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AssetUpdateUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            AssetUpdateUncheckedUpdateManyWithoutAssetUpdateInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AssetUpdateUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
