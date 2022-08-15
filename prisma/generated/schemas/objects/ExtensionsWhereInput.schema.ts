import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExtensionsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExtensionsWhereInputObjectSchema),
        z.lazy(() => ExtensionsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExtensionsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExtensionsWhereInputObjectSchema),
        z.lazy(() => ExtensionsWhereInputObjectSchema).array(),
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
  })
  .strict();

export const ExtensionsWhereInputObjectSchema = Schema;
