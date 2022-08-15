import { z } from 'zod';
import { ExtensionsWhereInputObjectSchema } from './objects/ExtensionsWhereInput.schema';
import { ExtensionsOrderByWithAggregationInputObjectSchema } from './objects/ExtensionsOrderByWithAggregationInput.schema';
import { ExtensionsScalarWhereWithAggregatesInputObjectSchema } from './objects/ExtensionsScalarWhereWithAggregatesInput.schema';
import { ExtensionsScalarFieldEnumSchema } from './enums/ExtensionsScalarFieldEnum.schema';

export const ExtensionsGroupBySchema = z.object({
  where: ExtensionsWhereInputObjectSchema.optional(),
  orderBy: ExtensionsOrderByWithAggregationInputObjectSchema,
  having: ExtensionsScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ExtensionsScalarFieldEnumSchema),
});
