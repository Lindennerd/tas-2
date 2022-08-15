import { z } from 'zod';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';
import { ManifestCreateWithoutManifestUpdateInputObjectSchema } from './ManifestCreateWithoutManifestUpdateInput.schema';
import { ManifestUncheckedCreateWithoutManifestUpdateInputObjectSchema } from './ManifestUncheckedCreateWithoutManifestUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestCreateOrConnectWithoutManifestUpdateInput> =
  z
    .object({
      where: z.lazy(() => ManifestWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ManifestCreateWithoutManifestUpdateInputObjectSchema),
        z.lazy(
          () => ManifestUncheckedCreateWithoutManifestUpdateInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ManifestCreateOrConnectWithoutManifestUpdateInputObjectSchema =
  Schema;
