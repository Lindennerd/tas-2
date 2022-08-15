import { z } from 'zod';
import { SectionWhereUniqueInputObjectSchema } from './SectionWhereUniqueInput.schema';
import { SectionCreateWithoutManifestInputObjectSchema } from './SectionCreateWithoutManifestInput.schema';
import { SectionUncheckedCreateWithoutManifestInputObjectSchema } from './SectionUncheckedCreateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionCreateOrConnectWithoutManifestInput> = z
  .object({
    where: z.lazy(() => SectionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SectionCreateWithoutManifestInputObjectSchema),
      z.lazy(() => SectionUncheckedCreateWithoutManifestInputObjectSchema),
    ]),
  })
  .strict();

export const SectionCreateOrConnectWithoutManifestInputObjectSchema = Schema;
