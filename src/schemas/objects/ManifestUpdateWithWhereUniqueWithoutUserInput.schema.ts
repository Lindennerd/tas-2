import { z } from 'zod';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';
import { ManifestUpdateWithoutUserInputObjectSchema } from './ManifestUpdateWithoutUserInput.schema';
import { ManifestUncheckedUpdateWithoutUserInputObjectSchema } from './ManifestUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ManifestWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ManifestUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ManifestUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ManifestUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
