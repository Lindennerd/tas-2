import { z } from 'zod';
import { ManifestCreateNestedOneWithoutManifestUpdateInputObjectSchema } from './ManifestCreateNestedOneWithoutManifestUpdateInput.schema';
import { UserCreateNestedOneWithoutManifestUpdateInputObjectSchema } from './UserCreateNestedOneWithoutManifestUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateCreateInput> = z
  .object({
    id: z.string().optional(),
    manifest: z.lazy(
      () => ManifestCreateNestedOneWithoutManifestUpdateInputObjectSchema,
    ),
    user: z.lazy(
      () => UserCreateNestedOneWithoutManifestUpdateInputObjectSchema,
    ),
    updatedAt: z.date().optional(),
  })
  .strict();

export const ManifestUpdateCreateInputObjectSchema = Schema;
