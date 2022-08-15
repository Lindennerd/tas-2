import { z } from 'zod';
import { AssetWhereUniqueInputObjectSchema } from './AssetWhereUniqueInput.schema';
import { AssetUpdateWithoutUserInputObjectSchema } from './AssetUpdateWithoutUserInput.schema';
import { AssetUncheckedUpdateWithoutUserInputObjectSchema } from './AssetUncheckedUpdateWithoutUserInput.schema';
import { AssetCreateWithoutUserInputObjectSchema } from './AssetCreateWithoutUserInput.schema';
import { AssetUncheckedCreateWithoutUserInputObjectSchema } from './AssetUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => AssetWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => AssetUpdateWithoutUserInputObjectSchema),
      z.lazy(() => AssetUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AssetCreateWithoutUserInputObjectSchema),
      z.lazy(() => AssetUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AssetUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
