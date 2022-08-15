import { z } from 'zod';
import { OptionWhereInputObjectSchema } from './objects/OptionWhereInput.schema';

export const OptionDeleteManySchema = z.object({
  where: OptionWhereInputObjectSchema.optional(),
});
