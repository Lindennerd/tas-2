import { z } from 'zod';
import { OptionWhereUniqueInputObjectSchema } from './objects/OptionWhereUniqueInput.schema';

export const OptionFindUniqueSchema = z.object({
  where: OptionWhereUniqueInputObjectSchema,
});
