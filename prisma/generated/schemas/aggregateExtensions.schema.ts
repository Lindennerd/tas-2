import { z } from 'zod';
import { ExtensionsWhereInputObjectSchema } from './objects/ExtensionsWhereInput.schema';
import { ExtensionsOrderByWithRelationInputObjectSchema } from './objects/ExtensionsOrderByWithRelationInput.schema';
import { ExtensionsWhereUniqueInputObjectSchema } from './objects/ExtensionsWhereUniqueInput.schema';

export const ExtensionsAggregateSchema = z.object({
  where: ExtensionsWhereInputObjectSchema.optional(),
  orderBy: ExtensionsOrderByWithRelationInputObjectSchema.optional(),
  cursor: ExtensionsWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
