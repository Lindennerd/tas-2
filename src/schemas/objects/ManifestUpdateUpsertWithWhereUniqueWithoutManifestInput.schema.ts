import { z } from 'zod';
import { ManifestUpdateWhereUniqueInputObjectSchema } from './ManifestUpdateWhereUniqueInput.schema';
import { ManifestUpdateUpdateWithoutManifestInputObjectSchema } from './ManifestUpdateUpdateWithoutManifestInput.schema';
import { ManifestUpdateUncheckedUpdateWithoutManifestInputObjectSchema } from './ManifestUpdateUncheckedUpdateWithoutManifestInput.schema';
import { ManifestUpdateCreateWithoutManifestInputObjectSchema } from './ManifestUpdateCreateWithoutManifestInput.schema';
import { ManifestUpdateUncheckedCreateWithoutManifestInputObjectSchema } from './ManifestUpdateUncheckedCreateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateUpsertWithWhereUniqueWithoutManifestInput> =
  z
    .object({
      where: z.lazy(() => ManifestUpdateWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ManifestUpdateUpdateWithoutManifestInputObjectSchema),
        z.lazy(
          () => ManifestUpdateUncheckedUpdateWithoutManifestInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ManifestUpdateCreateWithoutManifestInputObjectSchema),
        z.lazy(
          () => ManifestUpdateUncheckedCreateWithoutManifestInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ManifestUpdateUpsertWithWhereUniqueWithoutManifestInputObjectSchema =
  Schema;
