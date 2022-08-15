import { z } from 'zod';
import { ManifestUpdateCreateWithoutUserInputObjectSchema } from './ManifestUpdateCreateWithoutUserInput.schema';
import { ManifestUpdateUncheckedCreateWithoutUserInputObjectSchema } from './ManifestUpdateUncheckedCreateWithoutUserInput.schema';
import { ManifestUpdateCreateOrConnectWithoutUserInputObjectSchema } from './ManifestUpdateCreateOrConnectWithoutUserInput.schema';
import { ManifestUpdateWhereUniqueInputObjectSchema } from './ManifestUpdateWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateCreateNestedManyWithoutUserInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => ManifestUpdateCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ManifestUpdateCreateWithoutUserInputObjectSchema)
            .array(),
          z.lazy(
            () => ManifestUpdateUncheckedCreateWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ManifestUpdateUncheckedCreateWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(
            () => ManifestUpdateCreateOrConnectWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => ManifestUpdateCreateOrConnectWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => ManifestUpdateWhereUniqueInputObjectSchema),
          z.lazy(() => ManifestUpdateWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const ManifestUpdateCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
