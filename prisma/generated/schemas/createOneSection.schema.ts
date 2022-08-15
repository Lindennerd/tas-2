import { z } from 'zod';
import { SectionCreateInputObjectSchema } from './objects/SectionCreateInput.schema';

export const SectionCreateOneSchema = z.object({
  data: SectionCreateInputObjectSchema,
});
