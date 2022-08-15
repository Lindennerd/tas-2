import { z } from 'zod';
import { AssetUpdateCreateWithoutUserInputObjectSchema } from './AssetUpdateCreateWithoutUserInput.schema';
import { AssetUpdateUncheckedCreateWithoutUserInputObjectSchema } from './AssetUpdateUncheckedCreateWithoutUserInput.schema';
import { AssetUpdateCreateOrConnectWithoutUserInputObjectSchema } from './AssetUpdateCreateOrConnectWithoutUserInput.schema';
import { AssetUpdateWhereUniqueInputObjectSchema } from './AssetUpdateWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateCreateNestedManyWithoutUserInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => AssetUpdateCreateWithoutUserInputObjectSchema),
          z.lazy(() => AssetUpdateCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => AssetUpdateUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => AssetUpdateUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => AssetUpdateCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => AssetUpdateCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => AssetUpdateWhereUniqueInputObjectSchema),
          z.lazy(() => AssetUpdateWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const AssetUpdateCreateNestedManyWithoutUserInputObjectSchema = Schema;
