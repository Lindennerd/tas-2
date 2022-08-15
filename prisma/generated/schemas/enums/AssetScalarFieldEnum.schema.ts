import { z } from 'zod';

export const AssetScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'description',
  'url',
  'userId',
  'createdAt',
]);
