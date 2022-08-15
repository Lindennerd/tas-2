import { z } from 'zod';
import { UserCreateNestedOneWithoutAttachmentInputObjectSchema } from './UserCreateNestedOneWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentCreateWithoutManifestInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    url: z.string().optional().nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutAttachmentInputObjectSchema),
    createdAt: z.date().optional(),
  })
  .strict();

export const AttachmentCreateWithoutManifestInputObjectSchema = Schema;
