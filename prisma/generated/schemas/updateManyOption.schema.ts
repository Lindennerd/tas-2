import { z } from 'zod';
import { OptionUpdateManyMutationInputObjectSchema } from './objects/OptionUpdateManyMutationInput.schema';
import { OptionWhereInputObjectSchema } from './objects/OptionWhereInput.schema';

export const OptionUpdateManySchema = z.object({
  data: OptionUpdateManyMutationInputObjectSchema,
  where: OptionWhereInputObjectSchema.optional(),
});
