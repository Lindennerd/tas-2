import { z } from 'zod';
import { ManifestUpdateWhereInputObjectSchema } from './objects/ManifestUpdateWhereInput.schema';
import { ManifestUpdateOrderByWithAggregationInputObjectSchema } from './objects/ManifestUpdateOrderByWithAggregationInput.schema';
import { ManifestUpdateScalarWhereWithAggregatesInputObjectSchema } from './objects/ManifestUpdateScalarWhereWithAggregatesInput.schema';
import { ManifestUpdateScalarFieldEnumSchema } from './enums/ManifestUpdateScalarFieldEnum.schema';

export const ManifestUpdateGroupBySchema = z.object({
  where: ManifestUpdateWhereInputObjectSchema.optional(),
  orderBy: ManifestUpdateOrderByWithAggregationInputObjectSchema,
  having: ManifestUpdateScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ManifestUpdateScalarFieldEnumSchema),
});
