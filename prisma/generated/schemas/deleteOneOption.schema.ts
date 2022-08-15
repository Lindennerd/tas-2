import { z } from 'zod';
import { OptionWhereUniqueInputObjectSchema } from './objects/OptionWhereUniqueInput.schema';

export const OptionDeleteOneSchema = z.object({
  where: OptionWhereUniqueInputObjectSchema,
});
