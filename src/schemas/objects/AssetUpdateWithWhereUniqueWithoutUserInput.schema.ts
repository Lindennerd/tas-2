import { z } from 'zod';
import { AssetWhereUniqueInputObjectSchema } from './AssetWhereUniqueInput.schema';
import { AssetUpdateWithoutUserInputObjectSchema } from './AssetUpdateWithoutUserInput.schema';
import { AssetUncheckedUpdateWithoutUserInputObjectSchema } from './AssetUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => AssetWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => AssetUpdateWithoutUserInputObjectSchema),
      z.lazy(() => AssetUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AssetUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
