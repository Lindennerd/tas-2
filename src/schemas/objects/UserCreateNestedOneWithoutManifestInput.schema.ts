import { z } from 'zod';
import { UserCreateWithoutManifestInputObjectSchema } from './UserCreateWithoutManifestInput.schema';
import { UserUncheckedCreateWithoutManifestInputObjectSchema } from './UserUncheckedCreateWithoutManifestInput.schema';
import { UserCreateOrConnectWithoutManifestInputObjectSchema } from './UserCreateOrConnectWithoutManifestInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutManifestInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    }),
  ]);

export const UserCreateNestedOneWithoutManifestInputObjectSchema = Schema;
