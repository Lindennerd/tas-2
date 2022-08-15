import { z } from 'zod';
import { OptionWhereInputObjectSchema } from './objects/OptionWhereInput.schema';
import { OptionOrderByWithRelationInputObjectSchema } from './objects/OptionOrderByWithRelationInput.schema';
import { OptionWhereUniqueInputObjectSchema } from './objects/OptionWhereUniqueInput.schema';

export const OptionAggregateSchema = z.object({
  where: OptionWhereInputObjectSchema.optional(),
  orderBy: OptionOrderByWithRelationInputObjectSchema.optional(),
  cursor: OptionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
