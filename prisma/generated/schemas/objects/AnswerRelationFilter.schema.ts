import { z } from 'zod';
import { AnswerWhereInputObjectSchema } from './AnswerWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerRelationFilter> = z
  .object({
    is: z.lazy(() => AnswerWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => AnswerWhereInputObjectSchema).optional(),
  })
  .strict();

export const AnswerRelationFilterObjectSchema = Schema;
