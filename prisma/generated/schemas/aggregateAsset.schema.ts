import { z } from 'zod';
import { AssetWhereInputObjectSchema } from './objects/AssetWhereInput.schema';
import { AssetOrderByWithRelationInputObjectSchema } from './objects/AssetOrderByWithRelationInput.schema';
import { AssetWhereUniqueInputObjectSchema } from './objects/AssetWhereUniqueInput.schema';

export const AssetAggregateSchema = z.object({
  where: AssetWhereInputObjectSchema.optional(),
  orderBy: AssetOrderByWithRelationInputObjectSchema.optional(),
  cursor: AssetWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
