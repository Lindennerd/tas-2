import { z } from 'zod';

export const ExtensionsScalarFieldEnumSchema = z.enum([
  'id',
  'description',
  'default',
  'questionId',
]);
