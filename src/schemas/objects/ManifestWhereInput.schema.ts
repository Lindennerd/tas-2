import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { AssetRelationFilterObjectSchema } from './AssetRelationFilter.schema';
import { AssetWhereInputObjectSchema } from './AssetWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { SectionListRelationFilterObjectSchema } from './SectionListRelationFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ManifestUpdateListRelationFilterObjectSchema } from './ManifestUpdateListRelationFilter.schema';
import { AttachmentListRelationFilterObjectSchema } from './AttachmentListRelationFilter.schema';
import { AnswerListRelationFilterObjectSchema } from './AnswerListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ManifestWhereInputObjectSchema),
        z.lazy(() => ManifestWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ManifestWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ManifestWhereInputObjectSchema),
        z.lazy(() => ManifestWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    asset: z
      .union([
        z.lazy(() => AssetRelationFilterObjectSchema),
        z.lazy(() => AssetWhereInputObjectSchema),
      ])
      .optional(),
    assetId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
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
    sections: z.lazy(() => SectionListRelationFilterObjectSchema).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    ManifestUpdate: z
      .lazy(() => ManifestUpdateListRelationFilterObjectSchema)
      .optional(),
    Attachment: z
      .lazy(() => AttachmentListRelationFilterObjectSchema)
      .optional(),
    Answer: z.lazy(() => AnswerListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ManifestWhereInputObjectSchema = Schema;
