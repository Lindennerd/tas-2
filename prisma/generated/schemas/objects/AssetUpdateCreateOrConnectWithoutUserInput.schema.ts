import { z } from 'zod';
import { AssetUpdateWhereUniqueInputObjectSchema } from './AssetUpdateWhereUniqueInput.schema';
import { AssetUpdateCreateWithoutUserInputObjectSchema } from './AssetUpdateCreateWithoutUserInput.schema';
import { AssetUpdateUncheckedCreateWithoutUserInputObjectSchema } from './AssetUpdateUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => AssetUpdateWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AssetUpdateCreateWithoutUserInputObjectSchema),
      z.lazy(() => AssetUpdateUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AssetUpdateCreateOrConnectWithoutUserInputObjectSchema = Schema;
