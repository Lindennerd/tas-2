import { z } from 'zod';
import { AssetWhereInputObjectSchema } from './objects/AssetWhereInput.schema';

export const AssetDeleteManySchema = z.object({
  where: AssetWhereInputObjectSchema.optional(),
});
