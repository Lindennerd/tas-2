import { z } from 'zod';
import { AssetUpdateInputObjectSchema } from './objects/AssetUpdateInput.schema';
import { AssetWhereUniqueInputObjectSchema } from './objects/AssetWhereUniqueInput.schema';

export const AssetUpdateOneSchema = z.object({
  data: AssetUpdateInputObjectSchema,
  where: AssetWhereUniqueInputObjectSchema,
});
