import { z } from 'zod';
import { ExtensionsUpdateManyMutationInputObjectSchema } from './objects/ExtensionsUpdateManyMutationInput.schema';
import { ExtensionsWhereInputObjectSchema } from './objects/ExtensionsWhereInput.schema';

export const ExtensionsUpdateManySchema = z.object({
  data: ExtensionsUpdateManyMutationInputObjectSchema,
  where: ExtensionsWhereInputObjectSchema.optional(),
});
