import { z } from 'zod';
import { ManifestCreateNestedOneWithoutAnswerInputObjectSchema } from './ManifestCreateNestedOneWithoutAnswerInput.schema';
import { UserCreateNestedOneWithoutAnswerInputObjectSchema } from './UserCreateNestedOneWithoutAnswerInput.schema';
import { CommentCreateNestedManyWithoutAnswerInputObjectSchema } from './CommentCreateNestedManyWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerCreateWithoutQuestionInput> = z
  .object({
    id: z.string().optional(),
    value: z.string(),
    manifest: z.lazy(
      () => ManifestCreateNestedOneWithoutAnswerInputObjectSchema,
    ),
    createdAt: z.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutAnswerInputObjectSchema),
    Comment: z
      .lazy(() => CommentCreateNestedManyWithoutAnswerInputObjectSchema)
      .optional(),
  })
  .strict();

export const AnswerCreateWithoutQuestionInputObjectSchema = Schema;
