import { z } from 'zod';
import { ManifestUpdateWithoutManifestUpdateInputObjectSchema } from './ManifestUpdateWithoutManifestUpdateInput.schema';
import { ManifestUncheckedUpdateWithoutManifestUpdateInputObjectSchema } from './ManifestUncheckedUpdateWithoutManifestUpdateInput.schema';
import { ManifestCreateWithoutManifestUpdateInputObjectSchema } from './ManifestCreateWithoutManifestUpdateInput.schema';
import { ManifestUncheckedCreateWithoutManifestUpdateInputObjectSchema } from './ManifestUncheckedCreateWithoutManifestUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpsertWithoutManifestUpdateInput> = z
  .object({
    update: z.union([
      z.lazy(() => ManifestUpdateWithoutManifestUpdateInputObjectSchema),
      z.lazy(
        () => ManifestUncheckedUpdateWithoutManifestUpdateInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ManifestCreateWithoutManifestUpdateInputObjectSchema),
      z.lazy(
        () => ManifestUncheckedCreateWithoutManifestUpdateInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ManifestUpsertWithoutManifestUpdateInputObjectSchema = Schema;
