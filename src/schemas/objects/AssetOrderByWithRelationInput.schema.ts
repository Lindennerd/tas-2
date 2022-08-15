import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { AssetUpdateOrderByRelationAggregateInputObjectSchema } from './AssetUpdateOrderByRelationAggregateInput.schema';
import { ManifestOrderByRelationAggregateInputObjectSchema } from './ManifestOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    AssetUpdate: z
      .lazy(() => AssetUpdateOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Manifest: z
      .lazy(() => ManifestOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const AssetOrderByWithRelationInputObjectSchema = Schema;
