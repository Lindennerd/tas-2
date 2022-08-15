import { z } from 'zod';
import { AssetUpdateManyMutationInputObjectSchema } from './objects/AssetUpdateManyMutationInput.schema';
import { AssetWhereInputObjectSchema } from './objects/AssetWhereInput.schema';

export const AssetUpdateManySchema = z.object({
  data: AssetUpdateManyMutationInputObjectSchema,
  where: AssetWhereInputObjectSchema.optional(),
});
