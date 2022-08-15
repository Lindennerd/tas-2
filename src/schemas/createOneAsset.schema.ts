import { z } from 'zod';
import { AssetCreateInputObjectSchema } from './objects/AssetCreateInput.schema';

export const AssetCreateOneSchema = z.object({
  data: AssetCreateInputObjectSchema,
});
