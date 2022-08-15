import { z } from 'zod';
import { ManifestCreateWithoutAttachmentInputObjectSchema } from './ManifestCreateWithoutAttachmentInput.schema';
import { ManifestUncheckedCreateWithoutAttachmentInputObjectSchema } from './ManifestUncheckedCreateWithoutAttachmentInput.schema';
import { ManifestCreateOrConnectWithoutAttachmentInputObjectSchema } from './ManifestCreateOrConnectWithoutAttachmentInput.schema';
import { ManifestUpsertWithoutAttachmentInputObjectSchema } from './ManifestUpsertWithoutAttachmentInput.schema';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';
import { ManifestUpdateWithoutAttachmentInputObjectSchema } from './ManifestUpdateWithoutAttachmentInput.schema';
import { ManifestUncheckedUpdateWithoutAttachmentInputObjectSchema } from './ManifestUncheckedUpdateWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateOneRequiredWithoutAttachmentNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => ManifestCreateWithoutAttachmentInputObjectSchema),
          z.lazy(
            () => ManifestUncheckedCreateWithoutAttachmentInputObjectSchema,
          ),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => ManifestCreateOrConnectWithoutAttachmentInputObjectSchema)
        .optional(),
    }),
    z.object({
      upsert: z
        .lazy(() => ManifestUpsertWithoutAttachmentInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => ManifestWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => ManifestUpdateWithoutAttachmentInputObjectSchema),
          z.lazy(
            () => ManifestUncheckedUpdateWithoutAttachmentInputObjectSchema,
          ),
        ])
        .optional(),
    }),
  ]);

export const ManifestUpdateOneRequiredWithoutAttachmentNestedInputObjectSchema =
  Schema;
