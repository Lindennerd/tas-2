import { z } from 'zod';
import { SectionWhereUniqueInputObjectSchema } from './SectionWhereUniqueInput.schema';
import { SectionUpdateWithoutManifestInputObjectSchema } from './SectionUpdateWithoutManifestInput.schema';
import { SectionUncheckedUpdateWithoutManifestInputObjectSchema } from './SectionUncheckedUpdateWithoutManifestInput.schema';
import { SectionCreateWithoutManifestInputObjectSchema } from './SectionCreateWithoutManifestInput.schema';
import { SectionUncheckedCreateWithoutManifestInputObjectSchema } from './SectionUncheckedCreateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionUpsertWithWhereUniqueWithoutManifestInput> =
  z
    .object({
      where: z.lazy(() => SectionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SectionUpdateWithoutManifestInputObjectSchema),
        z.lazy(() => SectionUncheckedUpdateWithoutManifestInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => SectionCreateWithoutManifestInputObjectSchema),
        z.lazy(() => SectionUncheckedCreateWithoutManifestInputObjectSchema),
      ]),
    })
    .strict();

export const SectionUpsertWithWhereUniqueWithoutManifestInputObjectSchema =
  Schema;
