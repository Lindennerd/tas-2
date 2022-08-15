import { z } from 'zod';
import { ExtensionsWhereInputObjectSchema } from './ExtensionsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExtensionsListRelationFilter> = z
  .object({
    every: z.lazy(() => ExtensionsWhereInputObjectSchema).optional(),
    some: z.lazy(() => ExtensionsWhereInputObjectSchema).optional(),
    none: z.lazy(() => ExtensionsWhereInputObjectSchema).optional(),
  })
  .strict();

export const ExtensionsListRelationFilterObjectSchema = Schema;
