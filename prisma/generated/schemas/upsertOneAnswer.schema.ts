import { z } from 'zod';
import { AnswerWhereUniqueInputObjectSchema } from './objects/AnswerWhereUniqueInput.schema';
import { AnswerCreateInputObjectSchema } from './objects/AnswerCreateInput.schema';
import { AnswerUpdateInputObjectSchema } from './objects/AnswerUpdateInput.schema';

export const AnswerUpsertSchema = z.object({
  where: AnswerWhereUniqueInputObjectSchema,
  create: AnswerCreateInputObjectSchema,
  update: AnswerUpdateInputObjectSchema,
});
