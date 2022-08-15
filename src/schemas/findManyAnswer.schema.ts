import { z } from 'zod';
import { AnswerWhereInputObjectSchema } from './objects/AnswerWhereInput.schema';
import { AnswerOrderByWithRelationInputObjectSchema } from './objects/AnswerOrderByWithRelationInput.schema';
import { AnswerWhereUniqueInputObjectSchema } from './objects/AnswerWhereUniqueInput.schema';
import { AnswerScalarFieldEnumSchema } from './enums/AnswerScalarFieldEnum.schema';

export const AnswerFindManySchema = z.object({
  where: AnswerWhereInputObjectSchema.optional(),
  orderBy: AnswerOrderByWithRelationInputObjectSchema.optional(),
  cursor: AnswerWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AnswerScalarFieldEnumSchema).optional(),
});
