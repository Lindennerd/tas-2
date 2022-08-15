import { z } from 'zod';
import { ManifestUpdateScalarWhereInputObjectSchema } from './ManifestUpdateScalarWhereInput.schema';
import { ManifestUpdateUpdateManyMutationInputObjectSchema } from './ManifestUpdateUpdateManyMutationInput.schema';
import { ManifestUpdateUncheckedUpdateManyWithoutManifestUpdateInputObjectSchema } from './ManifestUpdateUncheckedUpdateManyWithoutManifestUpdateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ManifestUpdateScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ManifestUpdateUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ManifestUpdateUncheckedUpdateManyWithoutManifestUpdateInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ManifestUpdateUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
