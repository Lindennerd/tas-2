import { z } from 'zod';
import { AssetUpdateUpdateInputObjectSchema } from './objects/AssetUpdateUpdateInput.schema';
import { AssetUpdateWhereUniqueInputObjectSchema } from './objects/AssetUpdateWhereUniqueInput.schema';

export const AssetUpdateUpdateOneSchema = z.object({
  data: AssetUpdateUpdateInputObjectSchema,
  where: AssetUpdateWhereUniqueInputObjectSchema,
});
