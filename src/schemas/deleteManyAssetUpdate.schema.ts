import { z } from 'zod';
import { AssetUpdateWhereInputObjectSchema } from './objects/AssetUpdateWhereInput.schema';

export const AssetUpdateDeleteManySchema = z.object({
  where: AssetUpdateWhereInputObjectSchema.optional(),
});
