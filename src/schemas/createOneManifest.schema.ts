import { z } from 'zod';
import { ManifestCreateInputObjectSchema } from './objects/ManifestCreateInput.schema';

export const ManifestCreateOneSchema = z.object({
  data: ManifestCreateInputObjectSchema,
});
