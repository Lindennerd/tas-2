import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { SectionRelationFilterObjectSchema } from './SectionRelationFilter.schema';
import { SectionWhereInputObjectSchema } from './SectionWhereInput.schema';
import { AnswerListRelationFilterObjectSchema } from './AnswerListRelationFilter.schema';
import { OptionListRelationFilterObjectSchema } from './OptionListRelationFilter.schema';
import { ExtensionsListRelationFilterObjectSchema } from './ExtensionsListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => QuestionWhereInputObjectSchema),
        z.lazy(() => QuestionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => QuestionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => QuestionWhereInputObjectSchema),
        z.lazy(() => QuestionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    help: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    type: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    weight: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    Section: z
      .union([
        z.lazy(() => SectionRelationFilterObjectSchema),
        z.lazy(() => SectionWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    sectionId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    Answer: z.lazy(() => AnswerListRelationFilterObjectSchema).optional(),
    Option: z.lazy(() => OptionListRelationFilterObjectSchema).optional(),
    Extensions: z
      .lazy(() => ExtensionsListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const QuestionWhereInputObjectSchema = Schema;
