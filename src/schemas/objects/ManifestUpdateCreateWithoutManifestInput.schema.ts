import { z } from 'zod';
import { UserCreateNestedOneWithoutManifestUpdateInputObjectSchema } from './UserCreateNestedOneWithoutManifestUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateCreateWithoutManifestInput> = z
  .object({
    id: z.string().optional(),
    user: z.lazy(
      () => UserCreateNestedOneWithoutManifestUpdateInputObjectSchema,
    ),
    updatedAt: z.date().optional(),
  })
  .strict();

export const ManifestUpdateCreateWithoutManifestInputObjectSchema = Schema;
