import { z } from 'zod';
import { ExtensionsCreateInputObjectSchema } from './objects/ExtensionsCreateInput.schema';

export const ExtensionsCreateOneSchema = z.object({
  data: ExtensionsCreateInputObjectSchema,
});
