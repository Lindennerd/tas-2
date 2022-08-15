import { z } from 'zod';
import { ExtensionsWhereInputObjectSchema } from './objects/ExtensionsWhereInput.schema';

export const ExtensionsDeleteManySchema = z.object({
  where: ExtensionsWhereInputObjectSchema.optional(),
});
