import { z } from 'zod';

export const QuestionScalarFieldEnumSchema = z.enum([
  'id',
  'description',
  'help',
  'type',
  'weight',
  'sectionId',
]);
