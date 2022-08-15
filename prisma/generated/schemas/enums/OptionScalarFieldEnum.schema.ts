import { z } from 'zod';

export const OptionScalarFieldEnumSchema = z.enum([
  'id',
  'help',
  'description',
  'default',
  'questionId',
]);
