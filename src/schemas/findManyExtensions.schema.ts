import { z } from 'zod';
import { ExtensionsWhereInputObjectSchema } from './objects/ExtensionsWhereInput.schema';
import { ExtensionsOrderByWithRelationInputObjectSchema } from './objects/ExtensionsOrderByWithRelationInput.schema';
import { ExtensionsWhereUniqueInputObjectSchema } from './objects/ExtensionsWhereUniqueInput.schema';
import { ExtensionsScalarFieldEnumSchema } from './enums/ExtensionsScalarFieldEnum.schema';

export const ExtensionsFindManySchema = z.object({
  where: ExtensionsWhereInputObjectSchema.optional(),
  orderBy: ExtensionsOrderByWithRelationInputObjectSchema.optional(),
  cursor: ExtensionsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ExtensionsScalarFieldEnumSchema).optional(),
});
