import { z } from 'zod';
import { SectionWhereUniqueInputObjectSchema } from './SectionWhereUniqueInput.schema';
import { SectionUpdateWithoutManifestInputObjectSchema } from './SectionUpdateWithoutManifestInput.schema';
import { SectionUncheckedUpdateWithoutManifestInputObjectSchema } from './SectionUncheckedUpdateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionUpdateWithWhereUniqueWithoutManifestInput> =
  z
    .object({
      where: z.lazy(() => SectionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SectionUpdateWithoutManifestInputObjectSchema),
        z.lazy(() => SectionUncheckedUpdateWithoutManifestInputObjectSchema),
      ]),
    })
    .strict();

export const SectionUpdateWithWhereUniqueWithoutManifestInputObjectSchema =
  Schema;
