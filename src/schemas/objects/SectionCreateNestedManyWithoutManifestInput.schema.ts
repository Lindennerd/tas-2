import { z } from 'zod';
import { SectionCreateWithoutManifestInputObjectSchema } from './SectionCreateWithoutManifestInput.schema';
import { SectionUncheckedCreateWithoutManifestInputObjectSchema } from './SectionUncheckedCreateWithoutManifestInput.schema';
import { SectionCreateOrConnectWithoutManifestInputObjectSchema } from './SectionCreateOrConnectWithoutManifestInput.schema';
import { SectionWhereUniqueInputObjectSchema } from './SectionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionCreateNestedManyWithoutManifestInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => SectionCreateWithoutManifestInputObjectSchema),
          z.lazy(() => SectionCreateWithoutManifestInputObjectSchema).array(),
          z.lazy(() => SectionUncheckedCreateWithoutManifestInputObjectSchema),
          z
            .lazy(() => SectionUncheckedCreateWithoutManifestInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => SectionCreateOrConnectWithoutManifestInputObjectSchema),
          z
            .lazy(() => SectionCreateOrConnectWithoutManifestInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => SectionWhereUniqueInputObjectSchema),
          z.lazy(() => SectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const SectionCreateNestedManyWithoutManifestInputObjectSchema = Schema;
