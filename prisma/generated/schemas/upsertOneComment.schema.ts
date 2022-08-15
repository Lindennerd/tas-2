import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './objects/CommentWhereUniqueInput.schema';
import { CommentCreateInputObjectSchema } from './objects/CommentCreateInput.schema';
import { CommentUpdateInputObjectSchema } from './objects/CommentUpdateInput.schema';

export const CommentUpsertSchema = z.object({
  where: CommentWhereUniqueInputObjectSchema,
  create: CommentCreateInputObjectSchema,
  update: CommentUpdateInputObjectSchema,
});
