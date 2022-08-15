import { z } from 'zod';
import { ManifestUpdateInputObjectSchema } from './objects/ManifestUpdateInput.schema';
import { ManifestWhereUniqueInputObjectSchema } from './objects/ManifestWhereUniqueInput.schema';

export const ManifestUpdateOneSchema = z.object({
  data: ManifestUpdateInputObjectSchema,
  where: ManifestWhereUniqueInputObjectSchema,
});
