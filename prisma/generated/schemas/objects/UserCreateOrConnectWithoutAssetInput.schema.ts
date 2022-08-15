import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAssetInputObjectSchema } from './UserCreateWithoutAssetInput.schema';
import { UserUncheckedCreateWithoutAssetInputObjectSchema } from './UserUncheckedCreateWithoutAssetInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutAssetInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutAssetInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAssetInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutAssetInputObjectSchema = Schema;
