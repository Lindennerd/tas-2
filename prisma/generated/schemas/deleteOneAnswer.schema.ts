import { z } from 'zod';
import { AnswerWhereUniqueInputObjectSchema } from './objects/AnswerWhereUniqueInput.schema';

export const AnswerDeleteOneSchema = z.object({
  where: AnswerWhereUniqueInputObjectSchema,
});
