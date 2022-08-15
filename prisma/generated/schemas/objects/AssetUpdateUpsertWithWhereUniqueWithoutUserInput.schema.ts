import { z } from 'zod';
import { AssetUpdateWhereUniqueInputObjectSchema } from './AssetUpdateWhereUniqueInput.schema';
import { AssetUpdateUpdateWithoutUserInputObjectSchema } from './AssetUpdateUpdateWithoutUserInput.schema';
import { AssetUpdateUncheckedUpdateWithoutUserInputObjectSchema } from './AssetUpdateUncheckedUpdateWithoutUserInput.schema';
import { AssetUpdateCreateWithoutUserInputObjectSchema } from './AssetUpdateCreateWithoutUserInput.schema';
import { AssetUpdateUncheckedCreateWithoutUserInputObjectSchema } from './AssetUpdateUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AssetUpdateWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AssetUpdateUpdateWithoutUserInputObjectSchema),
        z.lazy(() => AssetUpdateUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => AssetUpdateCreateWithoutUserInputObjectSchema),
        z.lazy(() => AssetUpdateUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const AssetUpdateUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
