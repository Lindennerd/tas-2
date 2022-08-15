import { z } from 'zod';

export const AssetUpdateScalarFieldEnumSchema = z.enum([
  'id',
  'assetId',
  'userId',
  'updatedAt',
]);
