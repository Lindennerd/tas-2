import { z } from 'zod';
import { AssetUpdateWhereInputObjectSchema } from './objects/AssetUpdateWhereInput.schema';
import { AssetUpdateOrderByWithAggregationInputObjectSchema } from './objects/AssetUpdateOrderByWithAggregationInput.schema';
import { AssetUpdateScalarWhereWithAggregatesInputObjectSchema } from './objects/AssetUpdateScalarWhereWithAggregatesInput.schema';
import { AssetUpdateScalarFieldEnumSchema } from './enums/AssetUpdateScalarFieldEnum.schema';

export const AssetUpdateGroupBySchema = z.object({
  where: AssetUpdateWhereInputObjectSchema.optional(),
  orderBy: AssetUpdateOrderByWithAggregationInputObjectSchema,
  having: AssetUpdateScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AssetUpdateScalarFieldEnumSchema),
});
