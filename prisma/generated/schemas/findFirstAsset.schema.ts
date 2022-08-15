import { z } from 'zod';
import { AssetWhereInputObjectSchema } from './objects/AssetWhereInput.schema';
import { AssetOrderByWithRelationInputObjectSchema } from './objects/AssetOrderByWithRelationInput.schema';
import { AssetWhereUniqueInputObjectSchema } from './objects/AssetWhereUniqueInput.schema';
import { AssetScalarFieldEnumSchema } from './enums/AssetScalarFieldEnum.schema';

export const AssetFindFirstSchema = z.object({
  where: AssetWhereInputObjectSchema.optional(),
  orderBy: AssetOrderByWithRelationInputObjectSchema.optional(),
  cursor: AssetWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AssetScalarFieldEnumSchema).optional(),
});
