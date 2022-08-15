import { z } from 'zod';
import { AttachmentWhereInputObjectSchema } from './objects/AttachmentWhereInput.schema';
import { AttachmentOrderByWithAggregationInputObjectSchema } from './objects/AttachmentOrderByWithAggregationInput.schema';
import { AttachmentScalarWhereWithAggregatesInputObjectSchema } from './objects/AttachmentScalarWhereWithAggregatesInput.schema';
import { AttachmentScalarFieldEnumSchema } from './enums/AttachmentScalarFieldEnum.schema';

export const AttachmentGroupBySchema = z.object({
  where: AttachmentWhereInputObjectSchema.optional(),
  orderBy: AttachmentOrderByWithAggregationInputObjectSchema,
  having: AttachmentScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AttachmentScalarFieldEnumSchema),
});
