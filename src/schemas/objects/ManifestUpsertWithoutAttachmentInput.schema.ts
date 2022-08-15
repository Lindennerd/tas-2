import { z } from 'zod';
import { ManifestUpdateWithoutAttachmentInputObjectSchema } from './ManifestUpdateWithoutAttachmentInput.schema';
import { ManifestUncheckedUpdateWithoutAttachmentInputObjectSchema } from './ManifestUncheckedUpdateWithoutAttachmentInput.schema';
import { ManifestCreateWithoutAttachmentInputObjectSchema } from './ManifestCreateWithoutAttachmentInput.schema';
import { ManifestUncheckedCreateWithoutAttachmentInputObjectSchema } from './ManifestUncheckedCreateWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpsertWithoutAttachmentInput> = z
  .object({
    update: z.union([
      z.lazy(() => ManifestUpdateWithoutAttachmentInputObjectSchema),
      z.lazy(() => ManifestUncheckedUpdateWithoutAttachmentInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ManifestCreateWithoutAttachmentInputObjectSchema),
      z.lazy(() => ManifestUncheckedCreateWithoutAttachmentInputObjectSchema),
    ]),
  })
  .strict();

export const ManifestUpsertWithoutAttachmentInputObjectSchema = Schema;
