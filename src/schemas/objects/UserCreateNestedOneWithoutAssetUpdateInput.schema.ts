import { z } from 'zod';
import { UserCreateWithoutAssetUpdateInputObjectSchema } from './UserCreateWithoutAssetUpdateInput.schema';
import { UserUncheckedCreateWithoutAssetUpdateInputObjectSchema } from './UserUncheckedCreateWithoutAssetUpdateInput.schema';
import { UserCreateOrConnectWithoutAssetUpdateInputObjectSchema } from './UserCreateOrConnectWithoutAssetUpdateInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutAssetUpdateInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAssetUpdateInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutAssetUpdateInputObjectSchema),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutAssetUpdateInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    }),
  ]);

export const UserCreateNestedOneWithoutAssetUpdateInputObjectSchema = Schema;
