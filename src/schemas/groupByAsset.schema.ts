import { z } from 'zod';
import { AssetWhereInputObjectSchema } from './objects/AssetWhereInput.schema';
import { AssetOrderByWithAggregationInputObjectSchema } from './objects/AssetOrderByWithAggregationInput.schema';
import { AssetScalarWhereWithAggregatesInputObjectSchema } from './objects/AssetScalarWhereWithAggregatesInput.schema';
import { AssetScalarFieldEnumSchema } from './enums/AssetScalarFieldEnum.schema';

export const AssetGroupBySchema = z.object({
  where: AssetWhereInputObjectSchema.optional(),
  orderBy: AssetOrderByWithAggregationInputObjectSchema,
  having: AssetScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AssetScalarFieldEnumSchema),
});
