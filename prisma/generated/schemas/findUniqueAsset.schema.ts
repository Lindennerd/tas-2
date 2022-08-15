import { z } from 'zod';
import { AssetWhereUniqueInputObjectSchema } from './objects/AssetWhereUniqueInput.schema';

export const AssetFindUniqueSchema = z.object({
  where: AssetWhereUniqueInputObjectSchema,
});
