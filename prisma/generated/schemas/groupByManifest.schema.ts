import { z } from 'zod';
import { ManifestWhereInputObjectSchema } from './objects/ManifestWhereInput.schema';
import { ManifestOrderByWithAggregationInputObjectSchema } from './objects/ManifestOrderByWithAggregationInput.schema';
import { ManifestScalarWhereWithAggregatesInputObjectSchema } from './objects/ManifestScalarWhereWithAggregatesInput.schema';
import { ManifestScalarFieldEnumSchema } from './enums/ManifestScalarFieldEnum.schema';

export const ManifestGroupBySchema = z.object({
  where: ManifestWhereInputObjectSchema.optional(),
  orderBy: ManifestOrderByWithAggregationInputObjectSchema,
  having: ManifestScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ManifestScalarFieldEnumSchema),
});
