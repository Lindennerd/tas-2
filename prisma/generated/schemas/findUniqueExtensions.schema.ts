import { z } from 'zod';
import { ExtensionsWhereUniqueInputObjectSchema } from './objects/ExtensionsWhereUniqueInput.schema';

export const ExtensionsFindUniqueSchema = z.object({
  where: ExtensionsWhereUniqueInputObjectSchema,
});
