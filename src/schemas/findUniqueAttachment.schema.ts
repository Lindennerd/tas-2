import { z } from 'zod';
import { AttachmentWhereUniqueInputObjectSchema } from './objects/AttachmentWhereUniqueInput.schema';

export const AttachmentFindUniqueSchema = z.object({
  where: AttachmentWhereUniqueInputObjectSchema,
});
