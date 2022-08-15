import { z } from 'zod';
import { OptionWhereInputObjectSchema } from './objects/OptionWhereInput.schema';
import { OptionOrderByWithRelationInputObjectSchema } from './objects/OptionOrderByWithRelationInput.schema';
import { OptionWhereUniqueInputObjectSchema } from './objects/OptionWhereUniqueInput.schema';
import { OptionScalarFieldEnumSchema } from './enums/OptionScalarFieldEnum.schema';

export const OptionFindManySchema = z.object({
  where: OptionWhereInputObjectSchema.optional(),
  orderBy: OptionOrderByWithRelationInputObjectSchema.optional(),
  cursor: OptionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(OptionScalarFieldEnumSchema).optional(),
});
