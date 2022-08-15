import { z } from 'zod';
import { AssetUpdateWhereInputObjectSchema } from './objects/AssetUpdateWhereInput.schema';
import { AssetUpdateOrderByWithRelationInputObjectSchema } from './objects/AssetUpdateOrderByWithRelationInput.schema';
import { AssetUpdateWhereUniqueInputObjectSchema } from './objects/AssetUpdateWhereUniqueInput.schema';
import { AssetUpdateScalarFieldEnumSchema } from './enums/AssetUpdateScalarFieldEnum.schema';

export const AssetUpdateFindFirstSchema = z.object({
  where: AssetUpdateWhereInputObjectSchema.optional(),
  orderBy: AssetUpdateOrderByWithRelationInputObjectSchema.optional(),
  cursor: AssetUpdateWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AssetUpdateScalarFieldEnumSchema).optional(),
});
