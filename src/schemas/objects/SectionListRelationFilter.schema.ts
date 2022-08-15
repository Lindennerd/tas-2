import { z } from 'zod';
import { SectionWhereInputObjectSchema } from './SectionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionListRelationFilter> = z
  .object({
    every: z.lazy(() => SectionWhereInputObjectSchema).optional(),
    some: z.lazy(() => SectionWhereInputObjectSchema).optional(),
    none: z.lazy(() => SectionWhereInputObjectSchema).optional(),
  })
  .strict();

export const SectionListRelationFilterObjectSchema = Schema;
