import { z } from 'zod';
import { OptionWhereInputObjectSchema } from './OptionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OptionListRelationFilter> = z
  .object({
    every: z.lazy(() => OptionWhereInputObjectSchema).optional(),
    some: z.lazy(() => OptionWhereInputObjectSchema).optional(),
    none: z.lazy(() => OptionWhereInputObjectSchema).optional(),
  })
  .strict();

export const OptionListRelationFilterObjectSchema = Schema;
