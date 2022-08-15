import { z } from 'zod';
import { ExtensionsWhereUniqueInputObjectSchema } from './objects/ExtensionsWhereUniqueInput.schema';

export const ExtensionsDeleteOneSchema = z.object({
  where: ExtensionsWhereUniqueInputObjectSchema,
});
