import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { AssetOrderByRelationAggregateInputObjectSchema } from './AssetOrderByRelationAggregateInput.schema';
import { AssetUpdateOrderByRelationAggregateInputObjectSchema } from './AssetUpdateOrderByRelationAggregateInput.schema';
import { ManifestOrderByRelationAggregateInputObjectSchema } from './ManifestOrderByRelationAggregateInput.schema';
import { ManifestUpdateOrderByRelationAggregateInputObjectSchema } from './ManifestUpdateOrderByRelationAggregateInput.schema';
import { AttachmentOrderByRelationAggregateInputObjectSchema } from './AttachmentOrderByRelationAggregateInput.schema';
import { AnswerOrderByRelationAggregateInputObjectSchema } from './AnswerOrderByRelationAggregateInput.schema';
import { CommentOrderByRelationAggregateInputObjectSchema } from './CommentOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    emailVerified: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    accounts: z
      .lazy(() => AccountOrderByRelationAggregateInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Asset: z
      .lazy(() => AssetOrderByRelationAggregateInputObjectSchema)
      .optional(),
    AssetUpdate: z
      .lazy(() => AssetUpdateOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Manifest: z
      .lazy(() => ManifestOrderByRelationAggregateInputObjectSchema)
      .optional(),
    ManifestUpdate: z
      .lazy(() => ManifestUpdateOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Attachment: z
      .lazy(() => AttachmentOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Answer: z
      .lazy(() => AnswerOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Comment: z
      .lazy(() => CommentOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
