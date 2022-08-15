import { z } from 'zod';
import { ManifestCreateWithoutManifestUpdateInputObjectSchema } from './ManifestCreateWithoutManifestUpdateInput.schema';
import { ManifestUncheckedCreateWithoutManifestUpdateInputObjectSchema } from './ManifestUncheckedCreateWithoutManifestUpdateInput.schema';
import { ManifestCreateOrConnectWithoutManifestUpdateInputObjectSchema } from './ManifestCreateOrConnectWithoutManifestUpdateInput.schema';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestCreateNestedOneWithoutManifestUpdateInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => ManifestCreateWithoutManifestUpdateInputObjectSchema),
          z.lazy(
            () => ManifestUncheckedCreateWithoutManifestUpdateInputObjectSchema,
          ),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(
          () => ManifestCreateOrConnectWithoutManifestUpdateInputObjectSchema,
        )
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => ManifestWhereUniqueInputObjectSchema).optional(),
    }),
  ]);

export const ManifestCreateNestedOneWithoutManifestUpdateInputObjectSchema =
  Schema;
