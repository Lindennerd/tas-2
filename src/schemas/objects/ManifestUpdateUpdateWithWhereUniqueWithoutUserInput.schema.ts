import { z } from 'zod';
import { ManifestUpdateWhereUniqueInputObjectSchema } from './ManifestUpdateWhereUniqueInput.schema';
import { ManifestUpdateUpdateWithoutUserInputObjectSchema } from './ManifestUpdateUpdateWithoutUserInput.schema';
import { ManifestUpdateUncheckedUpdateWithoutUserInputObjectSchema } from './ManifestUpdateUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ManifestUpdateWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ManifestUpdateUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ManifestUpdateUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const ManifestUpdateUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
