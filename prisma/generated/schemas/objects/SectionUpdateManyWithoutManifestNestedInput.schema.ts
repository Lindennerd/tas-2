import { z } from 'zod';
import { SectionCreateWithoutManifestInputObjectSchema } from './SectionCreateWithoutManifestInput.schema';
import { SectionUncheckedCreateWithoutManifestInputObjectSchema } from './SectionUncheckedCreateWithoutManifestInput.schema';
import { SectionCreateOrConnectWithoutManifestInputObjectSchema } from './SectionCreateOrConnectWithoutManifestInput.schema';
import { SectionUpsertWithWhereUniqueWithoutManifestInputObjectSchema } from './SectionUpsertWithWhereUniqueWithoutManifestInput.schema';
import { SectionWhereUniqueInputObjectSchema } from './SectionWhereUniqueInput.schema';
import { SectionUpdateWithWhereUniqueWithoutManifestInputObjectSchema } from './SectionUpdateWithWhereUniqueWithoutManifestInput.schema';
import { SectionUpdateManyWithWhereWithoutManifestInputObjectSchema } from './SectionUpdateManyWithWhereWithoutManifestInput.schema';
import { SectionScalarWhereInputObjectSchema } from './SectionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionUpdateManyWithoutManifestNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => SectionUpsertWithWhereUniqueWithoutManifestInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SectionUpsertWithWhereUniqueWithoutManifestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      set: z
        .union([
          z.lazy(() => SectionWhereUniqueInputObjectSchema),
          z.lazy(() => SectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      disconnect: z
        .union([
          z.lazy(() => SectionWhereUniqueInputObjectSchema),
          z.lazy(() => SectionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      delete: z
        .union([
          z.lazy(() => SectionWhereUniqueInputObjectSchema),
          z.lazy(() => SectionWhereUniqueInputObjectSchema).array(),
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
    z.object({
      update: z
        .union([
          z.lazy(
            () => SectionUpdateWithWhereUniqueWithoutManifestInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SectionUpdateWithWhereUniqueWithoutManifestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(
            () => SectionUpdateManyWithWhereWithoutManifestInputObjectSchema,
          ),
          z
            .lazy(
              () => SectionUpdateManyWithWhereWithoutManifestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      deleteMany: z
        .union([
          z.lazy(() => SectionScalarWhereInputObjectSchema),
          z.lazy(() => SectionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const SectionUpdateManyWithoutManifestNestedInputObjectSchema = Schema;
