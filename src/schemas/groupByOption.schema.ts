import { z } from 'zod';
import { OptionWhereInputObjectSchema } from './objects/OptionWhereInput.schema';
import { OptionOrderByWithAggregationInputObjectSchema } from './objects/OptionOrderByWithAggregationInput.schema';
import { OptionScalarWhereWithAggregatesInputObjectSchema } from './objects/OptionScalarWhereWithAggregatesInput.schema';
import { OptionScalarFieldEnumSchema } from './enums/OptionScalarFieldEnum.schema';

export const OptionGroupBySchema = z.object({
  where: OptionWhereInputObjectSchema.optional(),
  orderBy: OptionOrderByWithAggregationInputObjectSchema,
  having: OptionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(OptionScalarFieldEnumSchema),
});
