import { z } from 'zod';
import { ManifestUpdateManyMutationInputObjectSchema } from './objects/ManifestUpdateManyMutationInput.schema';
import { ManifestWhereInputObjectSchema } from './objects/ManifestWhereInput.schema';

export const ManifestUpdateManySchema = z.object({
  data: ManifestUpdateManyMutationInputObjectSchema,
  where: ManifestWhereInputObjectSchema.optional(),
});
