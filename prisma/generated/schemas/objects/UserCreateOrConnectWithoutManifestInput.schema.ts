import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutManifestInputObjectSchema } from './UserCreateWithoutManifestInput.schema';
import { UserUncheckedCreateWithoutManifestInputObjectSchema } from './UserUncheckedCreateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutManifestInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutManifestInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutManifestInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutManifestInputObjectSchema = Schema;
