import { z } from 'zod';
import { AttachmentCreateInputObjectSchema } from './objects/AttachmentCreateInput.schema';

export const AttachmentCreateOneSchema = z.object({
  data: AttachmentCreateInputObjectSchema,
});
