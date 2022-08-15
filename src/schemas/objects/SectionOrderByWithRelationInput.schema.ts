import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QuestionOrderByRelationAggregateInputObjectSchema } from './QuestionOrderByRelationAggregateInput.schema';
import { ManifestOrderByWithRelationInputObjectSchema } from './ManifestOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    questions: z
      .lazy(() => QuestionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Manifest: z
      .lazy(() => ManifestOrderByWithRelationInputObjectSchema)
      .optional(),
    manifestId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const SectionOrderByWithRelationInputObjectSchema = Schema;
