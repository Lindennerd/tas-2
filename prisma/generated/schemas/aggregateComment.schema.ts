import { z } from 'zod';
import { CommentWhereInputObjectSchema } from './objects/CommentWhereInput.schema';
import { CommentOrderByWithRelationInputObjectSchema } from './objects/CommentOrderByWithRelationInput.schema';
import { CommentWhereUniqueInputObjectSchema } from './objects/CommentWhereUniqueInput.schema';

export const CommentAggregateSchema = z.object({
  where: CommentWhereInputObjectSchema.optional(),
  orderBy: CommentOrderByWithRelationInputObjectSchema.optional(),
  cursor: CommentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
