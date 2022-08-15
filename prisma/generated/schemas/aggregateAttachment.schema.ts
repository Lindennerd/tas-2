import { z } from 'zod';
import { AttachmentWhereInputObjectSchema } from './objects/AttachmentWhereInput.schema';
import { AttachmentOrderByWithRelationInputObjectSchema } from './objects/AttachmentOrderByWithRelationInput.schema';
import { AttachmentWhereUniqueInputObjectSchema } from './objects/AttachmentWhereUniqueInput.schema';

export const AttachmentAggregateSchema = z.object({
  where: AttachmentWhereInputObjectSchema.optional(),
  orderBy: AttachmentOrderByWithRelationInputObjectSchema.optional(),
  cursor: AttachmentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
