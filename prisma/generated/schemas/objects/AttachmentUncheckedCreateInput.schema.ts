import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    url: z.string().optional().nullable(),
    userId: z.string(),
    manifestId: z.string(),
    createdAt: z.date().optional(),
  })
  .strict();

export const AttachmentUncheckedCreateInputObjectSchema = Schema;
