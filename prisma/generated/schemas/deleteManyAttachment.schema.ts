import { z } from 'zod';
import { AttachmentWhereInputObjectSchema } from './objects/AttachmentWhereInput.schema';

export const AttachmentDeleteManySchema = z.object({
  where: AttachmentWhereInputObjectSchema.optional(),
});
