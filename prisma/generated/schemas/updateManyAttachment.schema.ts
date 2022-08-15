import { z } from 'zod';
import { AttachmentUpdateManyMutationInputObjectSchema } from './objects/AttachmentUpdateManyMutationInput.schema';
import { AttachmentWhereInputObjectSchema } from './objects/AttachmentWhereInput.schema';

export const AttachmentUpdateManySchema = z.object({
  data: AttachmentUpdateManyMutationInputObjectSchema,
  where: AttachmentWhereInputObjectSchema.optional(),
});
