import { z } from 'zod';
import { AssetUpdateWhereUniqueInputObjectSchema } from './objects/AssetUpdateWhereUniqueInput.schema';
import { AssetUpdateCreateInputObjectSchema } from './objects/AssetUpdateCreateInput.schema';
import { AssetUpdateUpdateInputObjectSchema } from './objects/AssetUpdateUpdateInput.schema';

export const AssetUpdateUpsertSchema = z.object({
  where: AssetUpdateWhereUniqueInputObjectSchema,
  create: AssetUpdateCreateInputObjectSchema,
  update: AssetUpdateUpdateInputObjectSchema,
});
