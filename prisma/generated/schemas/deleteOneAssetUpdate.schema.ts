import { z } from 'zod';
import { AssetUpdateWhereUniqueInputObjectSchema } from './objects/AssetUpdateWhereUniqueInput.schema';

export const AssetUpdateDeleteOneSchema = z.object({
  where: AssetUpdateWhereUniqueInputObjectSchema,
});
