import { z } from 'zod';

export const CommentScalarFieldEnumSchema = z.enum([
  'id',
  'value',
  'answerId',
  'approved',
  'createdAt',
  'userId',
]);
