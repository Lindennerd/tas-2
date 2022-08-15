import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AssetOrderByWithRelationInputObjectSchema } from './AssetOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { SectionOrderByRelationAggregateInputObjectSchema } from './SectionOrderByRelationAggregateInput.schema';
import { ManifestUpdateOrderByRelationAggregateInputObjectSchema } from './ManifestUpdateOrderByRelationAggregateInput.schema';
import { AttachmentOrderByRelationAggregateInputObjectSchema } from './AttachmentOrderByRelationAggregateInput.schema';
import { AnswerOrderByRelationAggregateInputObjectSchema } from './AnswerOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    asset: z.lazy(() => AssetOrderByWithRelationInputObjectSchema).optional(),
    assetId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    sections: z
      .lazy(() => SectionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    ManifestUpdate: z
      .lazy(() => ManifestUpdateOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Attachment: z
      .lazy(() => AttachmentOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Answer: z
      .lazy(() => AnswerOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ManifestOrderByWithRelationInputObjectSchema = Schema;
