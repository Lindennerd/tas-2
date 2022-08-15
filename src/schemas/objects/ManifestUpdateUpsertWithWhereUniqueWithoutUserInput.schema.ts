import { z } from 'zod';
import { ManifestUpdateWhereUniqueInputObjectSchema } from './ManifestUpdateWhereUniqueInput.schema';
import { ManifestUpdateUpdateWithoutUserInputObjectSchema } from './ManifestUpdateUpdateWithoutUserInput.schema';
import { ManifestUpdateUncheckedUpdateWithoutUserInputObjectSchema } from './ManifestUpdateUncheckedUpdateWithoutUserInput.schema';
import { ManifestUpdateCreateWithoutUserInputObjectSchema } from './ManifestUpdateCreateWithoutUserInput.schema';
import { ManifestUpdateUncheckedCreateWithoutUserInputObjectSchema } from './ManifestUpdateUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ManifestUpdateWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ManifestUpdateUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ManifestUpdateUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ManifestUpdateCreateWithoutUserInputObjectSchema),
        z.lazy(() => ManifestUpdateUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ManifestUpdateUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
