import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ManifestOrderByWithRelationInputObjectSchema } from './ManifestOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    manifest: z
      .lazy(() => ManifestOrderByWithRelationInputObjectSchema)
      .optional(),
    manifestId: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ManifestUpdateOrderByWithRelationInputObjectSchema = Schema;
