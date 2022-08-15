import { z } from 'zod';
import { AttachmentWhereInputObjectSchema } from './objects/AttachmentWhereInput.schema';
import { AttachmentOrderByWithRelationInputObjectSchema } from './objects/AttachmentOrderByWithRelationInput.schema';
import { AttachmentWhereUniqueInputObjectSchema } from './objects/AttachmentWhereUniqueInput.schema';
import { AttachmentScalarFieldEnumSchema } from './enums/AttachmentScalarFieldEnum.schema';

export const AttachmentFindFirstSchema = z.object({
  where: AttachmentWhereInputObjectSchema.optional(),
  orderBy: AttachmentOrderByWithRelationInputObjectSchema.optional(),
  cursor: AttachmentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AttachmentScalarFieldEnumSchema).optional(),
});
