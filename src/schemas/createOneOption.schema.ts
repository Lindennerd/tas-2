import { z } from 'zod';
import { OptionCreateInputObjectSchema } from './objects/OptionCreateInput.schema';

export const OptionCreateOneSchema = z.object({
  data: OptionCreateInputObjectSchema,
});
