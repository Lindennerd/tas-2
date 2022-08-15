import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SectionOrderByWithRelationInputObjectSchema } from './SectionOrderByWithRelationInput.schema';
import { AnswerOrderByRelationAggregateInputObjectSchema } from './AnswerOrderByRelationAggregateInput.schema';
import { OptionOrderByRelationAggregateInputObjectSchema } from './OptionOrderByRelationAggregateInput.schema';
import { ExtensionsOrderByRelationAggregateInputObjectSchema } from './ExtensionsOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    help: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    weight: z.lazy(() => SortOrderSchema).optional(),
    Section: z
      .lazy(() => SectionOrderByWithRelationInputObjectSchema)
      .optional(),
    sectionId: z.lazy(() => SortOrderSchema).optional(),
    Answer: z
      .lazy(() => AnswerOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Option: z
      .lazy(() => OptionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Extensions: z
      .lazy(() => ExtensionsOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionOrderByWithRelationInputObjectSchema = Schema;
