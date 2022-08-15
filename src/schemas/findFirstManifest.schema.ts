import { z } from 'zod';
import { ManifestWhereInputObjectSchema } from './objects/ManifestWhereInput.schema';
import { ManifestOrderByWithRelationInputObjectSchema } from './objects/ManifestOrderByWithRelationInput.schema';
import { ManifestWhereUniqueInputObjectSchema } from './objects/ManifestWhereUniqueInput.schema';
import { ManifestScalarFieldEnumSchema } from './enums/ManifestScalarFieldEnum.schema';

export const ManifestFindFirstSchema = z.object({
  where: ManifestWhereInputObjectSchema.optional(),
  orderBy: ManifestOrderByWithRelationInputObjectSchema.optional(),
  cursor: ManifestWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ManifestScalarFieldEnumSchema).optional(),
});
