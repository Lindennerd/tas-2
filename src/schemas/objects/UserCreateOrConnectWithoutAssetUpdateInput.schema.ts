import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAssetUpdateInputObjectSchema } from './UserCreateWithoutAssetUpdateInput.schema';
import { UserUncheckedCreateWithoutAssetUpdateInputObjectSchema } from './UserUncheckedCreateWithoutAssetUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutAssetUpdateInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutAssetUpdateInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAssetUpdateInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutAssetUpdateInputObjectSchema = Schema;
