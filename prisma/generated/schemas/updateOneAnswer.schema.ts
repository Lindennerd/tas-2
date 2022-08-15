import { z } from 'zod';
import { AnswerUpdateInputObjectSchema } from './objects/AnswerUpdateInput.schema';
import { AnswerWhereUniqueInputObjectSchema } from './objects/AnswerWhereUniqueInput.schema';

export const AnswerUpdateOneSchema = z.object({
  data: AnswerUpdateInputObjectSchema,
  where: AnswerWhereUniqueInputObjectSchema,
});
