import { z } from 'zod';
import { ManifestScalarWhereInputObjectSchema } from './ManifestScalarWhereInput.schema';
import { ManifestUpdateManyMutationInputObjectSchema } from './ManifestUpdateManyMutationInput.schema';
import { ManifestUncheckedUpdateManyWithoutManifestInputObjectSchema } from './ManifestUncheckedUpdateManyWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateManyWithWhereWithoutAssetInput> = z
  .object({
    where: z.lazy(() => ManifestScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ManifestUpdateManyMutationInputObjectSchema),
      z.lazy(() => ManifestUncheckedUpdateManyWithoutManifestInputObjectSchema),
    ]),
  })
  .strict();

export const ManifestUpdateManyWithWhereWithoutAssetInputObjectSchema = Schema;
