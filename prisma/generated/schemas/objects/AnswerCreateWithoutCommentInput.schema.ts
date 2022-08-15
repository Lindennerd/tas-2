import { z } from 'zod';
import { QuestionCreateNestedOneWithoutAnswerInputObjectSchema } from './QuestionCreateNestedOneWithoutAnswerInput.schema';
import { ManifestCreateNestedOneWithoutAnswerInputObjectSchema } from './ManifestCreateNestedOneWithoutAnswerInput.schema';
import { UserCreateNestedOneWithoutAnswerInputObjectSchema } from './UserCreateNestedOneWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerCreateWithoutCommentInput> = z
  .object({
    id: z.string().optional(),
    value: z.string(),
    question: z.lazy(
      () => QuestionCreateNestedOneWithoutAnswerInputObjectSchema,
    ),
    manifest: z.lazy(
      () => ManifestCreateNestedOneWithoutAnswerInputObjectSchema,
    ),
    createdAt: z.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutAnswerInputObjectSchema),
  })
  .strict();

export const AnswerCreateWithoutCommentInputObjectSchema = Schema;
