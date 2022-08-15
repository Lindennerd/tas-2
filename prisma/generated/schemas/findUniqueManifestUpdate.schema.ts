import { z } from 'zod';
import { ManifestUpdateWhereUniqueInputObjectSchema } from './objects/ManifestUpdateWhereUniqueInput.schema';

export const ManifestUpdateFindUniqueSchema = z.object({
  where: ManifestUpdateWhereUniqueInputObjectSchema,
});
