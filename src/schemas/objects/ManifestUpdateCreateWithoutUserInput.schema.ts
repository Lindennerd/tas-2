import { z } from 'zod';
import { ManifestCreateNestedOneWithoutManifestUpdateInputObjectSchema } from './ManifestCreateNestedOneWithoutManifestUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    manifest: z.lazy(
      () => ManifestCreateNestedOneWithoutManifestUpdateInputObjectSchema,
    ),
    updatedAt: z.date().optional(),
  })
  .strict();

export const ManifestUpdateCreateWithoutUserInputObjectSchema = Schema;
