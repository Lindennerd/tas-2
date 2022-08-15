import { z } from 'zod';
import { QuestionCreateNestedOneWithoutExtensionsInputObjectSchema } from './QuestionCreateNestedOneWithoutExtensionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExtensionsCreateInput> = z
  .object({
    id: z.string().optional(),
    description: z.string(),
    default: z.boolean().optional(),
    question: z.lazy(
      () => QuestionCreateNestedOneWithoutExtensionsInputObjectSchema,
    ),
  })
  .strict();

export const ExtensionsCreateInputObjectSchema = Schema;
