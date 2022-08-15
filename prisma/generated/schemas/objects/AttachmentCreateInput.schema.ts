import { z } from 'zod';
import { UserCreateNestedOneWithoutAttachmentInputObjectSchema } from './UserCreateNestedOneWithoutAttachmentInput.schema';
import { ManifestCreateNestedOneWithoutAttachmentInputObjectSchema } from './ManifestCreateNestedOneWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    url: z.string().optional().nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutAttachmentInputObjectSchema),
    manifest: z.lazy(
      () => ManifestCreateNestedOneWithoutAttachmentInputObjectSchema,
    ),
    createdAt: z.date().optional(),
  })
  .strict();

export const AttachmentCreateInputObjectSchema = Schema;
