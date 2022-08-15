import { z } from 'zod';
import { AnswerWhereInputObjectSchema } from './objects/AnswerWhereInput.schema';
import { AnswerOrderByWithRelationInputObjectSchema } from './objects/AnswerOrderByWithRelationInput.schema';
import { AnswerWhereUniqueInputObjectSchema } from './objects/AnswerWhereUniqueInput.schema';

export const AnswerAggregateSchema = z.object({
  where: AnswerWhereInputObjectSchema.optional(),
  orderBy: AnswerOrderByWithRelationInputObjectSchema.optional(),
  cursor: AnswerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
