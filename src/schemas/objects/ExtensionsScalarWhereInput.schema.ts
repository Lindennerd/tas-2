import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExtensionsScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExtensionsScalarWhereInputObjectSchema),
        z.lazy(() => ExtensionsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExtensionsScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExtensionsScalarWhereInputObjectSchema),
        z.lazy(() => ExtensionsScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    default: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    questionId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const ExtensionsScalarWhereInputObjectSchema = Schema;
