import { z } from 'zod';
import { SectionScalarWhereInputObjectSchema } from './SectionScalarWhereInput.schema';
import { SectionUpdateManyMutationInputObjectSchema } from './SectionUpdateManyMutationInput.schema';
import { SectionUncheckedUpdateManyWithoutSectionsInputObjectSchema } from './SectionUncheckedUpdateManyWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionUpdateManyWithWhereWithoutManifestInput> =
  z
    .object({
      where: z.lazy(() => SectionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => SectionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => SectionUncheckedUpdateManyWithoutSectionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SectionUpdateManyWithWhereWithoutManifestInputObjectSchema =
  Schema;
