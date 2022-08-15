import { z } from 'zod';
import { UserUpdateWithoutAssetUpdateInputObjectSchema } from './UserUpdateWithoutAssetUpdateInput.schema';
import { UserUncheckedUpdateWithoutAssetUpdateInputObjectSchema } from './UserUncheckedUpdateWithoutAssetUpdateInput.schema';
import { UserCreateWithoutAssetUpdateInputObjectSchema } from './UserCreateWithoutAssetUpdateInput.schema';
import { UserUncheckedCreateWithoutAssetUpdateInputObjectSchema } from './UserUncheckedCreateWithoutAssetUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutAssetUpdateInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutAssetUpdateInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutAssetUpdateInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutAssetUpdateInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAssetUpdateInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutAssetUpdateInputObjectSchema = Schema;
