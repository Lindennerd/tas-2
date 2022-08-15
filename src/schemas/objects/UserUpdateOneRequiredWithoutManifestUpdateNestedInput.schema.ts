import { z } from 'zod';
import { UserCreateWithoutManifestUpdateInputObjectSchema } from './UserCreateWithoutManifestUpdateInput.schema';
import { UserUncheckedCreateWithoutManifestUpdateInputObjectSchema } from './UserUncheckedCreateWithoutManifestUpdateInput.schema';
import { UserCreateOrConnectWithoutManifestUpdateInputObjectSchema } from './UserCreateOrConnectWithoutManifestUpdateInput.schema';
import { UserUpsertWithoutManifestUpdateInputObjectSchema } from './UserUpsertWithoutManifestUpdateInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutManifestUpdateInputObjectSchema } from './UserUpdateWithoutManifestUpdateInput.schema';
import { UserUncheckedUpdateWithoutManifestUpdateInputObjectSchema } from './UserUncheckedUpdateWithoutManifestUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutManifestUpdateNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutManifestUpdateInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutManifestUpdateInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutManifestUpdateInputObjectSchema,
          ),
        ])
        .optional(),
    }),
  ]);

export const UserUpdateOneRequiredWithoutManifestUpdateNestedInputObjectSchema =
  Schema;
