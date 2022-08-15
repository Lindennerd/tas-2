import { z } from 'zod';
import { ManifestCreateWithoutAttachmentInputObjectSchema } from './ManifestCreateWithoutAttachmentInput.schema';
import { ManifestUncheckedCreateWithoutAttachmentInputObjectSchema } from './ManifestUncheckedCreateWithoutAttachmentInput.schema';
import { ManifestCreateOrConnectWithoutAttachmentInputObjectSchema } from './ManifestCreateOrConnectWithoutAttachmentInput.schema';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestCreateNestedOneWithoutAttachmentInput> =
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
      connect: z.lazy(() => ManifestWhereUniqueInputObjectSchema).optional(),
    }),
  ]);

export const ManifestCreateNestedOneWithoutAttachmentInputObjectSchema = Schema;
