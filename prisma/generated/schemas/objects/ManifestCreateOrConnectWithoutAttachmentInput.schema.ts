import { z } from 'zod';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';
import { ManifestCreateWithoutAttachmentInputObjectSchema } from './ManifestCreateWithoutAttachmentInput.schema';
import { ManifestUncheckedCreateWithoutAttachmentInputObjectSchema } from './ManifestUncheckedCreateWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestCreateOrConnectWithoutAttachmentInput> =
  z
    .object({
      where: z.lazy(() => ManifestWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ManifestCreateWithoutAttachmentInputObjectSchema),
        z.lazy(() => ManifestUncheckedCreateWithoutAttachmentInputObjectSchema),
      ]),
    })
    .strict();

export const ManifestCreateOrConnectWithoutAttachmentInputObjectSchema = Schema;
