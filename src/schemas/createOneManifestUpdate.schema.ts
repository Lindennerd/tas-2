import { z } from 'zod';
import { ManifestUpdateCreateInputObjectSchema } from './objects/ManifestUpdateCreateInput.schema';

export const ManifestUpdateCreateOneSchema = z.object({
  data: ManifestUpdateCreateInputObjectSchema,
});
