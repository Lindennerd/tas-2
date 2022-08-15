import { z } from 'zod';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';
import { ManifestUpdateWithoutUserInputObjectSchema } from './ManifestUpdateWithoutUserInput.schema';
import { ManifestUncheckedUpdateWithoutUserInputObjectSchema } from './ManifestUncheckedUpdateWithoutUserInput.schema';
import { ManifestCreateWithoutUserInputObjectSchema } from './ManifestCreateWithoutUserInput.schema';
import { ManifestUncheckedCreateWithoutUserInputObjectSchema } from './ManifestUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ManifestWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ManifestUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ManifestUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ManifestCreateWithoutUserInputObjectSchema),
        z.lazy(() => ManifestUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ManifestUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
