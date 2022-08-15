import { z } from 'zod';
import { SectionWhereUniqueInputObjectSchema } from './objects/SectionWhereUniqueInput.schema';
import { SectionCreateInputObjectSchema } from './objects/SectionCreateInput.schema';
import { SectionUpdateInputObjectSchema } from './objects/SectionUpdateInput.schema';

export const SectionUpsertSchema = z.object({
  where: SectionWhereUniqueInputObjectSchema,
  create: SectionCreateInputObjectSchema,
  update: SectionUpdateInputObjectSchema,
});
