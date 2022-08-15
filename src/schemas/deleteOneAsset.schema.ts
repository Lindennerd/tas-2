import { z } from 'zod';
import { AssetWhereUniqueInputObjectSchema } from './objects/AssetWhereUniqueInput.schema';

export const AssetDeleteOneSchema = z.object({
  where: AssetWhereUniqueInputObjectSchema,
});
