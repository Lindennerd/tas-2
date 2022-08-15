import { z } from 'zod';
import { ManifestUpdateWhereUniqueInputObjectSchema } from './objects/ManifestUpdateWhereUniqueInput.schema';
import { ManifestUpdateCreateInputObjectSchema } from './objects/ManifestUpdateCreateInput.schema';
import { ManifestUpdateUpdateInputObjectSchema } from './objects/ManifestUpdateUpdateInput.schema';

export const ManifestUpdateUpsertSchema = z.object({
  where: ManifestUpdateWhereUniqueInputObjectSchema,
  create: ManifestUpdateCreateInputObjectSchema,
  update: ManifestUpdateUpdateInputObjectSchema,
});
