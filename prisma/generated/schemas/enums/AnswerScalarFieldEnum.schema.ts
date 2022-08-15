import { z } from 'zod';

export const AnswerScalarFieldEnumSchema = z.enum([
  'id',
  'value',
  'questionId',
  'manifestId',
  'createdAt',
  'userId',
]);
