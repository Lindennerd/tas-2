import { z } from 'zod';
import { UserUpdateWithoutAssetInputObjectSchema } from './UserUpdateWithoutAssetInput.schema';
import { UserUncheckedUpdateWithoutAssetInputObjectSchema } from './UserUncheckedUpdateWithoutAssetInput.schema';
import { UserCreateWithoutAssetInputObjectSchema } from './UserCreateWithoutAssetInput.schema';
import { UserUncheckedCreateWithoutAssetInputObjectSchema } from './UserUncheckedCreateWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutAssetInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutAssetInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutAssetInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutAssetInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAssetInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutAssetInputObjectSchema = Schema;
