import { z } from 'zod';
import { AnswerCreateInputObjectSchema } from './objects/AnswerCreateInput.schema';

export const AnswerCreateOneSchema = z.object({
  data: AnswerCreateInputObjectSchema,
});
