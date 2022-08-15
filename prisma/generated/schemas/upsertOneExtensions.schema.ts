import { z } from 'zod';
import { ExtensionsWhereUniqueInputObjectSchema } from './objects/ExtensionsWhereUniqueInput.schema';
import { ExtensionsCreateInputObjectSchema } from './objects/ExtensionsCreateInput.schema';
import { ExtensionsUpdateInputObjectSchema } from './objects/ExtensionsUpdateInput.schema';

export const ExtensionsUpsertSchema = z.object({
  where: ExtensionsWhereUniqueInputObjectSchema,
  create: ExtensionsCreateInputObjectSchema,
  update: ExtensionsUpdateInputObjectSchema,
});
