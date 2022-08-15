import { z } from 'zod';

export const ManifestUpdateScalarFieldEnumSchema = z.enum([
  'id',
  'manifestId',
  'userId',
  'updatedAt',
]);
