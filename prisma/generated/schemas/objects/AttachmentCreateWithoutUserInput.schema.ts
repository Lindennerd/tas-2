import { z } from 'zod';
import { ManifestCreateNestedOneWithoutAttachmentInputObjectSchema } from './ManifestCreateNestedOneWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    url: z.string().optional().nullable(),
    manifest: z.lazy(
      () => ManifestCreateNestedOneWithoutAttachmentInputObjectSchema,
    ),
    createdAt: z.date().optional(),
  })
  .strict();

export const AttachmentCreateWithoutUserInputObjectSchema = Schema;
