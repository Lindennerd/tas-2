import { z } from 'zod';
import { AssetCreateWithoutUserInputObjectSchema } from './AssetCreateWithoutUserInput.schema';
import { AssetUncheckedCreateWithoutUserInputObjectSchema } from './AssetUncheckedCreateWithoutUserInput.schema';
import { AssetCreateOrConnectWithoutUserInputObjectSchema } from './AssetCreateOrConnectWithoutUserInput.schema';
import { AssetWhereUniqueInputObjectSchema } from './AssetWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetCreateNestedManyWithoutUserInput> = z.union(
  [
    z.object({
      create: z
        .union([
          z.lazy(() => AssetCreateWithoutUserInputObjectSchema),
          z.lazy(() => AssetCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => AssetUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => AssetUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => AssetCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => AssetCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => AssetWhereUniqueInputObjectSchema),
          z.lazy(() => AssetWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ],
);

export const AssetCreateNestedManyWithoutUserInputObjectSchema = Schema;
