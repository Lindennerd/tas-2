import { z } from 'zod';
import { UserUpdateWithoutManifestUpdateInputObjectSchema } from './UserUpdateWithoutManifestUpdateInput.schema';
import { UserUncheckedUpdateWithoutManifestUpdateInputObjectSchema } from './UserUncheckedUpdateWithoutManifestUpdateInput.schema';
import { UserCreateWithoutManifestUpdateInputObjectSchema } from './UserCreateWithoutManifestUpdateInput.schema';
import { UserUncheckedCreateWithoutManifestUpdateInputObjectSchema } from './UserUncheckedCreateWithoutManifestUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutManifestUpdateInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutManifestUpdateInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutManifestUpdateInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutManifestUpdateInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutManifestUpdateInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutManifestUpdateInputObjectSchema = Schema;
