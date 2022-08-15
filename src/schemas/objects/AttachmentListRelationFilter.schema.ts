import { z } from 'zod';
import { AttachmentWhereInputObjectSchema } from './AttachmentWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentListRelationFilter> = z
  .object({
    every: z.lazy(() => AttachmentWhereInputObjectSchema).optional(),
    some: z.lazy(() => AttachmentWhereInputObjectSchema).optional(),
    none: z.lazy(() => AttachmentWhereInputObjectSchema).optional(),
  })
  .strict();

export const AttachmentListRelationFilterObjectSchema = Schema;
