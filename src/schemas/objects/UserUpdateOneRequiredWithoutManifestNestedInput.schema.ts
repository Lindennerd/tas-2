import { z } from 'zod';
import { UserCreateWithoutManifestInputObjectSchema } from './UserCreateWithoutManifestInput.schema';
import { UserUncheckedCreateWithoutManifestInputObjectSchema } from './UserUncheckedCreateWithoutManifestInput.schema';
import { UserCreateOrConnectWithoutManifestInputObjectSchema } from './UserCreateOrConnectWithoutManifestInput.schema';
import { UserUpsertWithoutManifestInputObjectSchema } from './UserUpsertWithoutManifestInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutManifestInputObjectSchema } from './UserUpdateWithoutManifestInput.schema';
import { UserUncheckedUpdateWithoutManifestInputObjectSchema } from './UserUncheckedUpdateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutManifestNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutManifestInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutManifestInputObjectSchema),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutManifestInputObjectSchema)
        .optional(),
    }),
    z.object({
      upsert: z
        .lazy(() => UserUpsertWithoutManifestInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutManifestInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutManifestInputObjectSchema),
        ])
        .optional(),
    }),
  ]);

export const UserUpdateOneRequiredWithoutManifestNestedInputObjectSchema =
  Schema;
