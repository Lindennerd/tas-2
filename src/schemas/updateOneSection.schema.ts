import { z } from 'zod';
import { SectionUpdateInputObjectSchema } from './objects/SectionUpdateInput.schema';
import { SectionWhereUniqueInputObjectSchema } from './objects/SectionWhereUniqueInput.schema';

export const SectionUpdateOneSchema = z.object({
  data: SectionUpdateInputObjectSchema,
  where: SectionWhereUniqueInputObjectSchema,
});
