import { z } from 'zod';
import { CommentUpdateInputObjectSchema } from './objects/CommentUpdateInput.schema';
import { CommentWhereUniqueInputObjectSchema } from './objects/CommentWhereUniqueInput.schema';

export const CommentUpdateOneSchema = z.object({
  data: CommentUpdateInputObjectSchema,
  where: CommentWhereUniqueInputObjectSchema,
});
