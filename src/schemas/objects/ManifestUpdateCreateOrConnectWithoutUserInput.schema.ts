import { z } from 'zod';
import { ManifestUpdateWhereUniqueInputObjectSchema } from './ManifestUpdateWhereUniqueInput.schema';
import { ManifestUpdateCreateWithoutUserInputObjectSchema } from './ManifestUpdateCreateWithoutUserInput.schema';
import { ManifestUpdateUncheckedCreateWithoutUserInputObjectSchema } from './ManifestUpdateUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ManifestUpdateWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ManifestUpdateCreateWithoutUserInputObjectSchema),
        z.lazy(() => ManifestUpdateUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ManifestUpdateCreateOrConnectWithoutUserInputObjectSchema = Schema;
