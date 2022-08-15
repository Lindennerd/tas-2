import { z } from 'zod';
import { AssetUpdateWhereUniqueInputObjectSchema } from './objects/AssetUpdateWhereUniqueInput.schema';

export const AssetUpdateFindUniqueSchema = z.object({
  where: AssetUpdateWhereUniqueInputObjectSchema,
});
