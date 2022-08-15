import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    url: z.string().optional().nullable(),
    manifestId: z.string(),
    createdAt: z.date().optional(),
  })
  .strict();

export const AttachmentUncheckedCreateWithoutUserInputObjectSchema = Schema;
