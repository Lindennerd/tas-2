import { z } from 'zod';
import { UserCreateWithoutAssetInputObjectSchema } from './UserCreateWithoutAssetInput.schema';
import { UserUncheckedCreateWithoutAssetInputObjectSchema } from './UserUncheckedCreateWithoutAssetInput.schema';
import { UserCreateOrConnectWithoutAssetInputObjectSchema } from './UserCreateOrConnectWithoutAssetInput.schema';
import { UserUpsertWithoutAssetInputObjectSchema } from './UserUpsertWithoutAssetInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutAssetInputObjectSchema } from './UserUpdateWithoutAssetInput.schema';
import { UserUncheckedUpdateWithoutAssetInputObjectSchema } from './UserUncheckedUpdateWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAssetNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAssetInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutAssetInputObjectSchema),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutAssetInputObjectSchema)
        .optional(),
    }),
    z.object({
      upsert: z.lazy(() => UserUpsertWithoutAssetInputObjectSchema).optional(),
    }),
    z.object({
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutAssetInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutAssetInputObjectSchema),
        ])
        .optional(),
    }),
  ]);

export const UserUpdateOneRequiredWithoutAssetNestedInputObjectSchema = Schema;
