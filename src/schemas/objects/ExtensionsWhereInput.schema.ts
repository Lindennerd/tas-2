import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { QuestionRelationFilterObjectSchema } from './QuestionRelationFilter.schema';
import { QuestionWhereInputObjectSchema } from './QuestionWhereInput.schema';

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
    question: z
      .union([
        z.lazy(() => QuestionRelationFilterObjectSchema),
        z.lazy(() => QuestionWhereInputObjectSchema),
      ])
      .optional(),
    questionId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const ExtensionsWhereInputObjectSchema = Schema;
