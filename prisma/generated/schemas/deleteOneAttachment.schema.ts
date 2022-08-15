import { z } from 'zod';
import { AttachmentWhereUniqueInputObjectSchema } from './objects/AttachmentWhereUniqueInput.schema';

export const AttachmentDeleteOneSchema = z.object({
  where: AttachmentWhereUniqueInputObjectSchema,
});
