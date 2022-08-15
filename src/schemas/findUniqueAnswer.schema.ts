import { z } from 'zod';
import { AnswerWhereUniqueInputObjectSchema } from './objects/AnswerWhereUniqueInput.schema';

export const AnswerFindUniqueSchema = z.object({
  where: AnswerWhereUniqueInputObjectSchema,
});
