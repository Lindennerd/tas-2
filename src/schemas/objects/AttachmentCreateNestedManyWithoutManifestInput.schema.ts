import { z } from 'zod';
import { AttachmentCreateWithoutManifestInputObjectSchema } from './AttachmentCreateWithoutManifestInput.schema';
import { AttachmentUncheckedCreateWithoutManifestInputObjectSchema } from './AttachmentUncheckedCreateWithoutManifestInput.schema';
import { AttachmentCreateOrConnectWithoutManifestInputObjectSchema } from './AttachmentCreateOrConnectWithoutManifestInput.schema';
import { AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentCreateNestedManyWithoutManifestInput> =
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
      connect: z
        .union([
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const AttachmentCreateNestedManyWithoutManifestInputObjectSchema =
  Schema;
