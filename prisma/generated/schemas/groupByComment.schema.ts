import { z } from 'zod';
import { CommentWhereInputObjectSchema } from './objects/CommentWhereInput.schema';
import { CommentOrderByWithAggregationInputObjectSchema } from './objects/CommentOrderByWithAggregationInput.schema';
import { CommentScalarWhereWithAggregatesInputObjectSchema } from './objects/CommentScalarWhereWithAggregatesInput.schema';
import { CommentScalarFieldEnumSchema } from './enums/CommentScalarFieldEnum.schema';

export const CommentGroupBySchema = z.object({
  where: CommentWhereInputObjectSchema.optional(),
  orderBy: CommentOrderByWithAggregationInputObjectSchema,
  having: CommentScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CommentScalarFieldEnumSchema),
});
