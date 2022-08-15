import { z } from 'zod';
import { ManifestWhereUniqueInputObjectSchema } from './objects/ManifestWhereUniqueInput.schema';
import { ManifestCreateInputObjectSchema } from './objects/ManifestCreateInput.schema';
import { ManifestUpdateInputObjectSchema } from './objects/ManifestUpdateInput.schema';

export const ManifestUpsertSchema = z.object({
  where: ManifestWhereUniqueInputObjectSchema,
  create: ManifestCreateInputObjectSchema,
  update: ManifestUpdateInputObjectSchema,
});
