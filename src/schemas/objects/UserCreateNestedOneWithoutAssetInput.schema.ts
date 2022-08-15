import { z } from 'zod';
import { UserCreateWithoutAssetInputObjectSchema } from './UserCreateWithoutAssetInput.schema';
import { UserUncheckedCreateWithoutAssetInputObjectSchema } from './UserUncheckedCreateWithoutAssetInput.schema';
import { UserCreateOrConnectWithoutAssetInputObjectSchema } from './UserCreateOrConnectWithoutAssetInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutAssetInput> = z.union([
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  }),
]);

export const UserCreateNestedOneWithoutAssetInputObjectSchema = Schema;
