import { z } from 'zod';
import { AttachmentCreateWithoutManifestInputObjectSchema } from './AttachmentCreateWithoutManifestInput.schema';
import { AttachmentUncheckedCreateWithoutManifestInputObjectSchema } from './AttachmentUncheckedCreateWithoutManifestInput.schema';
import { AttachmentCreateOrConnectWithoutManifestInputObjectSchema } from './AttachmentCreateOrConnectWithoutManifestInput.schema';
import { AttachmentUpsertWithWhereUniqueWithoutManifestInputObjectSchema } from './AttachmentUpsertWithWhereUniqueWithoutManifestInput.schema';
import { AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentUpdateWithWhereUniqueWithoutManifestInputObjectSchema } from './AttachmentUpdateWithWhereUniqueWithoutManifestInput.schema';
import { AttachmentUpdateManyWithWhereWithoutManifestInputObjectSchema } from './AttachmentUpdateManyWithWhereWithoutManifestInput.schema';
import { AttachmentScalarWhereInputObjectSchema } from './AttachmentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentUncheckedUpdateManyWithoutManifestNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => AttachmentCreateWithoutManifestInputObjectSchema),
          z
            .lazy(() => AttachmentCreateWithoutManifestInputObjectSchema)
            .array(),
          z.lazy(
            () => AttachmentUncheckedCreateWithoutManifestInputObjectSchema,
          ),
          z
            .lazy(
              () => AttachmentUncheckedCreateWithoutManifestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(
            () => AttachmentCreateOrConnectWithoutManifestInputObjectSchema,
          ),
          z
            .lazy(
              () => AttachmentCreateOrConnectWithoutManifestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      upsert: z
        .union([
          z.lazy(
            () =>
              AttachmentUpsertWithWhereUniqueWithoutManifestInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AttachmentUpsertWithWhereUniqueWithoutManifestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      set: z
        .union([
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      disconnect: z
        .union([
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      delete: z
        .union([
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(
            () =>
              AttachmentUpdateWithWhereUniqueWithoutManifestInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AttachmentUpdateWithWhereUniqueWithoutManifestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(
            () => AttachmentUpdateManyWithWhereWithoutManifestInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                AttachmentUpdateManyWithWhereWithoutManifestInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      deleteMany: z
        .union([
          z.lazy(() => AttachmentScalarWhereInputObjectSchema),
          z.lazy(() => AttachmentScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const AttachmentUncheckedUpdateManyWithoutManifestNestedInputObjectSchema =
  Schema;
