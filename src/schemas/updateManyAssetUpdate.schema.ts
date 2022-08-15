import { z } from 'zod';
import { AssetUpdateUpdateManyMutationInputObjectSchema } from './objects/AssetUpdateUpdateManyMutationInput.schema';
import { AssetUpdateWhereInputObjectSchema } from './objects/AssetUpdateWhereInput.schema';

export const AssetUpdateUpdateManySchema = z.object({
  data: AssetUpdateUpdateManyMutationInputObjectSchema,
  where: AssetUpdateWhereInputObjectSchema.optional(),
});
