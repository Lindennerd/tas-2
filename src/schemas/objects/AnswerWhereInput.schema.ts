import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { QuestionRelationFilterObjectSchema } from './QuestionRelationFilter.schema';
import { QuestionWhereInputObjectSchema } from './QuestionWhereInput.schema';
import { ManifestRelationFilterObjectSchema } from './ManifestRelationFilter.schema';
import { ManifestWhereInputObjectSchema } from './ManifestWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { CommentListRelationFilterObjectSchema } from './CommentListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AnswerWhereInputObjectSchema),
        z.lazy(() => AnswerWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AnswerWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AnswerWhereInputObjectSchema),
        z.lazy(() => AnswerWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    value: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
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
    manifest: z
      .union([
        z.lazy(() => ManifestRelationFilterObjectSchema),
        z.lazy(() => ManifestWhereInputObjectSchema),
      ])
      .optional(),
    manifestId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    Comment: z.lazy(() => CommentListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const AnswerWhereInputObjectSchema = Schema;
