import { z } from 'zod';
import { ManifestWhereInputObjectSchema } from './objects/ManifestWhereInput.schema';

export const ManifestDeleteManySchema = z.object({
  where: ManifestWhereInputObjectSchema.optional(),
});
