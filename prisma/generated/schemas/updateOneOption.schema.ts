import { z } from 'zod';
import { OptionUpdateInputObjectSchema } from './objects/OptionUpdateInput.schema';
import { OptionWhereUniqueInputObjectSchema } from './objects/OptionWhereUniqueInput.schema';

export const OptionUpdateOneSchema = z.object({
  data: OptionUpdateInputObjectSchema,
  where: OptionWhereUniqueInputObjectSchema,
});
