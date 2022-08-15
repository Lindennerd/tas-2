import { z } from 'zod';
import { AttachmentUpdateInputObjectSchema } from './objects/AttachmentUpdateInput.schema';
import { AttachmentWhereUniqueInputObjectSchema } from './objects/AttachmentWhereUniqueInput.schema';

export const AttachmentUpdateOneSchema = z.object({
  data: AttachmentUpdateInputObjectSchema,
  where: AttachmentWhereUniqueInputObjectSchema,
});
