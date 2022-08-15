import { z } from 'zod';
import { ManifestWhereUniqueInputObjectSchema } from './objects/ManifestWhereUniqueInput.schema';

export const ManifestDeleteOneSchema = z.object({
  where: ManifestWhereUniqueInputObjectSchema,
});
