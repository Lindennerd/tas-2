import { z } from 'zod';
import { ManifestWhereUniqueInputObjectSchema } from './objects/ManifestWhereUniqueInput.schema';

export const ManifestFindUniqueSchema = z.object({
  where: ManifestWhereUniqueInputObjectSchema,
});
