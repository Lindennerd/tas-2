import { z } from 'zod';
import { UserCreateWithoutAssetUpdateInputObjectSchema } from './UserCreateWithoutAssetUpdateInput.schema';
import { UserUncheckedCreateWithoutAssetUpdateInputObjectSchema } from './UserUncheckedCreateWithoutAssetUpdateInput.schema';
import { UserCreateOrConnectWithoutAssetUpdateInputObjectSchema } from './UserCreateOrConnectWithoutAssetUpdateInput.schema';
import { UserUpsertWithoutAssetUpdateInputObjectSchema } from './UserUpsertWithoutAssetUpdateInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutAssetUpdateInputObjectSchema } from './UserUpdateWithoutAssetUpdateInput.schema';
import { UserUncheckedUpdateWithoutAssetUpdateInputObjectSchema } from './UserUncheckedUpdateWithoutAssetUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAssetUpdateNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutAssetUpdateInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutAssetUpdateInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutAssetUpdateInputObjectSchema),
        ])
        .optional(),
    }),
  ]);

export const UserUpdateOneRequiredWithoutAssetUpdateNestedInputObjectSchema =
  Schema;
