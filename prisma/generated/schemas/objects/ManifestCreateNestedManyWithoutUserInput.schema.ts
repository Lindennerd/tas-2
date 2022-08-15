import { z } from 'zod';
import { ManifestCreateWithoutUserInputObjectSchema } from './ManifestCreateWithoutUserInput.schema';
import { ManifestUncheckedCreateWithoutUserInputObjectSchema } from './ManifestUncheckedCreateWithoutUserInput.schema';
import { ManifestCreateOrConnectWithoutUserInputObjectSchema } from './ManifestCreateOrConnectWithoutUserInput.schema';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestCreateNestedManyWithoutUserInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => ManifestCreateWithoutUserInputObjectSchema),
          z.lazy(() => ManifestCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => ManifestUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ManifestUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => ManifestCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => ManifestCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => ManifestWhereUniqueInputObjectSchema),
          z.lazy(() => ManifestWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const ManifestCreateNestedManyWithoutUserInputObjectSchema = Schema;
