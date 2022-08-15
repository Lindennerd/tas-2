import { z } from 'zod';
import { UserUpdateWithoutManifestInputObjectSchema } from './UserUpdateWithoutManifestInput.schema';
import { UserUncheckedUpdateWithoutManifestInputObjectSchema } from './UserUncheckedUpdateWithoutManifestInput.schema';
import { UserCreateWithoutManifestInputObjectSchema } from './UserCreateWithoutManifestInput.schema';
import { UserUncheckedCreateWithoutManifestInputObjectSchema } from './UserUncheckedCreateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutManifestInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutManifestInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutManifestInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutManifestInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutManifestInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutManifestInputObjectSchema = Schema;
