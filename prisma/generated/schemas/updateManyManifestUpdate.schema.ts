import { z } from 'zod';
import { ManifestUpdateUpdateManyMutationInputObjectSchema } from './objects/ManifestUpdateUpdateManyMutationInput.schema';
import { ManifestUpdateWhereInputObjectSchema } from './objects/ManifestUpdateWhereInput.schema';

export const ManifestUpdateUpdateManySchema = z.object({
  data: ManifestUpdateUpdateManyMutationInputObjectSchema,
  where: ManifestUpdateWhereInputObjectSchema.optional(),
});
