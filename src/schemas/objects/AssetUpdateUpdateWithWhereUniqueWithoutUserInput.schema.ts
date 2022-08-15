import { z } from 'zod';
import { AssetUpdateWhereUniqueInputObjectSchema } from './AssetUpdateWhereUniqueInput.schema';
import { AssetUpdateUpdateWithoutUserInputObjectSchema } from './AssetUpdateUpdateWithoutUserInput.schema';
import { AssetUpdateUncheckedUpdateWithoutUserInputObjectSchema } from './AssetUpdateUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AssetUpdateWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AssetUpdateUpdateWithoutUserInputObjectSchema),
        z.lazy(() => AssetUpdateUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const AssetUpdateUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
