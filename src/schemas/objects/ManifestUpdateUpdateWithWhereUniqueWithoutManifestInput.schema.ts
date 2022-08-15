import { z } from 'zod';
import { ManifestUpdateWhereUniqueInputObjectSchema } from './ManifestUpdateWhereUniqueInput.schema';
import { ManifestUpdateUpdateWithoutManifestInputObjectSchema } from './ManifestUpdateUpdateWithoutManifestInput.schema';
import { ManifestUpdateUncheckedUpdateWithoutManifestInputObjectSchema } from './ManifestUpdateUncheckedUpdateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateUpdateWithWhereUniqueWithoutManifestInput> =
  z
    .object({
      where: z.lazy(() => ManifestUpdateWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ManifestUpdateUpdateWithoutManifestInputObjectSchema),
        z.lazy(
          () => ManifestUpdateUncheckedUpdateWithoutManifestInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ManifestUpdateUpdateWithWhereUniqueWithoutManifestInputObjectSchema =
  Schema;
