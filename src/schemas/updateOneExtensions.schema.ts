import { z } from 'zod';
import { ExtensionsUpdateInputObjectSchema } from './objects/ExtensionsUpdateInput.schema';
import { ExtensionsWhereUniqueInputObjectSchema } from './objects/ExtensionsWhereUniqueInput.schema';

export const ExtensionsUpdateOneSchema = z.object({
  data: ExtensionsUpdateInputObjectSchema,
  where: ExtensionsWhereUniqueInputObjectSchema,
});
