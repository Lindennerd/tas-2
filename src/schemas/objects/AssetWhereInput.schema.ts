import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AssetUpdateListRelationFilterObjectSchema } from './AssetUpdateListRelationFilter.schema';
import { ManifestListRelationFilterObjectSchema } from './ManifestListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AssetWhereInputObjectSchema),
        z.lazy(() => AssetWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AssetWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AssetWhereInputObjectSchema),
        z.lazy(() => AssetWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    AssetUpdate: z
      .lazy(() => AssetUpdateListRelationFilterObjectSchema)
      .optional(),
    Manifest: z.lazy(() => ManifestListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const AssetWhereInputObjectSchema = Schema;
