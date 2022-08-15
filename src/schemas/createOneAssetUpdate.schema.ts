import { z } from 'zod';
import { AssetUpdateCreateInputObjectSchema } from './objects/AssetUpdateCreateInput.schema';

export const AssetUpdateCreateOneSchema = z.object({
  data: AssetUpdateCreateInputObjectSchema,
});
