import { z } from 'zod';
import { ManifestUpdateWhereUniqueInputObjectSchema } from './ManifestUpdateWhereUniqueInput.schema';
import { ManifestUpdateCreateWithoutManifestInputObjectSchema } from './ManifestUpdateCreateWithoutManifestInput.schema';
import { ManifestUpdateUncheckedCreateWithoutManifestInputObjectSchema } from './ManifestUpdateUncheckedCreateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateCreateOrConnectWithoutManifestInput> =
  z
    .object({
      where: z.lazy(() => ManifestUpdateWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ManifestUpdateCreateWithoutManifestInputObjectSchema),
        z.lazy(
          () => ManifestUpdateUncheckedCreateWithoutManifestInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ManifestUpdateCreateOrConnectWithoutManifestInputObjectSchema =
  Schema;
