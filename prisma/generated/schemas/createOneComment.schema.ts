import { z } from 'zod';
import { CommentCreateInputObjectSchema } from './objects/CommentCreateInput.schema';

export const CommentCreateOneSchema = z.object({
  data: CommentCreateInputObjectSchema,
});
