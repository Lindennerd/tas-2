import { z } from 'zod';
import { ManifestUpdateUpdateInputObjectSchema } from './objects/ManifestUpdateUpdateInput.schema';
import { ManifestUpdateWhereUniqueInputObjectSchema } from './objects/ManifestUpdateWhereUniqueInput.schema';

export const ManifestUpdateUpdateOneSchema = z.object({
  data: ManifestUpdateUpdateInputObjectSchema,
  where: ManifestUpdateWhereUniqueInputObjectSchema,
});
