import { z } from 'zod';
import { AttachmentWhereUniqueInputObjectSchema } from './objects/AttachmentWhereUniqueInput.schema';
import { AttachmentCreateInputObjectSchema } from './objects/AttachmentCreateInput.schema';
import { AttachmentUpdateInputObjectSchema } from './objects/AttachmentUpdateInput.schema';

export const AttachmentUpsertSchema = z.object({
  where: AttachmentWhereUniqueInputObjectSchema,
  create: AttachmentCreateInputObjectSchema,
  update: AttachmentUpdateInputObjectSchema,
});
