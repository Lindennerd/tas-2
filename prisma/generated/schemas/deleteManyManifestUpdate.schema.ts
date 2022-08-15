import { z } from 'zod';
import { ManifestUpdateWhereInputObjectSchema } from './objects/ManifestUpdateWhereInput.schema';

export const ManifestUpdateDeleteManySchema = z.object({
  where: ManifestUpdateWhereInputObjectSchema.optional(),
});
