import { z } from 'zod';
import { ManifestUpdateWhereInputObjectSchema } from './objects/ManifestUpdateWhereInput.schema';
import { ManifestUpdateOrderByWithRelationInputObjectSchema } from './objects/ManifestUpdateOrderByWithRelationInput.schema';
import { ManifestUpdateWhereUniqueInputObjectSchema } from './objects/ManifestUpdateWhereUniqueInput.schema';
import { ManifestUpdateScalarFieldEnumSchema } from './enums/ManifestUpdateScalarFieldEnum.schema';

export const ManifestUpdateFindManySchema = z.object({
  where: ManifestUpdateWhereInputObjectSchema.optional(),
  orderBy: ManifestUpdateOrderByWithRelationInputObjectSchema.optional(),
  cursor: ManifestUpdateWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ManifestUpdateScalarFieldEnumSchema).optional(),
});
