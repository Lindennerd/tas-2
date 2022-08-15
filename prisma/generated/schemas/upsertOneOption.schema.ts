import { z } from 'zod';
import { OptionWhereUniqueInputObjectSchema } from './objects/OptionWhereUniqueInput.schema';
import { OptionCreateInputObjectSchema } from './objects/OptionCreateInput.schema';
import { OptionUpdateInputObjectSchema } from './objects/OptionUpdateInput.schema';

export const OptionUpsertSchema = z.object({
  where: OptionWhereUniqueInputObjectSchema,
  create: OptionCreateInputObjectSchema,
  update: OptionUpdateInputObjectSchema,
});
