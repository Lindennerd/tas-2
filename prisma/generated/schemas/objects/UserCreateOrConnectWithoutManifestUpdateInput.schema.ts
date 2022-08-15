import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutManifestUpdateInputObjectSchema } from './UserCreateWithoutManifestUpdateInput.schema';
import { UserUncheckedCreateWithoutManifestUpdateInputObjectSchema } from './UserUncheckedCreateWithoutManifestUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutManifestUpdateInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutManifestUpdateInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutManifestUpdateInputObjectSchema),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutManifestUpdateInputObjectSchema = Schema;
