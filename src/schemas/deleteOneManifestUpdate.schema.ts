import { z } from 'zod';
import { ManifestUpdateWhereUniqueInputObjectSchema } from './objects/ManifestUpdateWhereUniqueInput.schema';

export const ManifestUpdateDeleteOneSchema = z.object({
  where: ManifestUpdateWhereUniqueInputObjectSchema,
});
