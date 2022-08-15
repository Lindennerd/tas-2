import { z } from 'zod';
import { SectionWhereInputObjectSchema } from './objects/SectionWhereInput.schema';
import { SectionOrderByWithRelationInputObjectSchema } from './objects/SectionOrderByWithRelationInput.schema';
import { SectionWhereUniqueInputObjectSchema } from './objects/SectionWhereUniqueInput.schema';

export const SectionAggregateSchema = z.object({
  where: SectionWhereInputObjectSchema.optional(),
  orderBy: SectionOrderByWithRelationInputObjectSchema.optional(),
  cursor: SectionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
