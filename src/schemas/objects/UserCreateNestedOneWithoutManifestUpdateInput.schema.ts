import { z } from 'zod';
import { UserCreateWithoutManifestUpdateInputObjectSchema } from './UserCreateWithoutManifestUpdateInput.schema';
import { UserUncheckedCreateWithoutManifestUpdateInputObjectSchema } from './UserUncheckedCreateWithoutManifestUpdateInput.schema';
import { UserCreateOrConnectWithoutManifestUpdateInputObjectSchema } from './UserCreateOrConnectWithoutManifestUpdateInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutManifestUpdateInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutManifestUpdateInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutManifestUpdateInputObjectSchema,
          ),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutManifestUpdateInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    }),
  ]);

export const UserCreateNestedOneWithoutManifestUpdateInputObjectSchema = Schema;
