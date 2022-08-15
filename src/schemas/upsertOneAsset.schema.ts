import { z } from 'zod';
import { AssetWhereUniqueInputObjectSchema } from './objects/AssetWhereUniqueInput.schema';
import { AssetCreateInputObjectSchema } from './objects/AssetCreateInput.schema';
import { AssetUpdateInputObjectSchema } from './objects/AssetUpdateInput.schema';

export const AssetUpsertSchema = z.object({
  where: AssetWhereUniqueInputObjectSchema,
  create: AssetCreateInputObjectSchema,
  update: AssetUpdateInputObjectSchema,
});
