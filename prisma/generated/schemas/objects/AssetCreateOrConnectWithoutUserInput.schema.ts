import { z } from 'zod';
import { AssetWhereUniqueInputObjectSchema } from './AssetWhereUniqueInput.schema';
import { AssetCreateWithoutUserInputObjectSchema } from './AssetCreateWithoutUserInput.schema';
import { AssetUncheckedCreateWithoutUserInputObjectSchema } from './AssetUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => AssetWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AssetCreateWithoutUserInputObjectSchema),
      z.lazy(() => AssetUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AssetCreateOrConnectWithoutUserInputObjectSchema = Schema;
