import { z } from 'zod';

export const ManifestScalarFieldEnumSchema = z.enum([
  'id',
  'assetId',
  'userId',
  'createdAt',
]);
