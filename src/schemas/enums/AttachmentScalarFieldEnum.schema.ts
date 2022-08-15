import { z } from 'zod';

export const AttachmentScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'description',
  'url',
  'userId',
  'manifestId',
  'createdAt',
]);
