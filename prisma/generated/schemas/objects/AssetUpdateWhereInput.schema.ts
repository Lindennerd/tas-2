import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { AssetRelationFilterObjectSchema } from './AssetRelationFilter.schema';
import { AssetWhereInputObjectSchema } from './AssetWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AssetUpdateWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AssetUpdateWhereInputObjectSchema),
        z.lazy(() => AssetUpdateWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AssetUpdateWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AssetUpdateWhereInputObjectSchema),
        z.lazy(() => AssetUpdateWhereInputObjectSchema).array(),
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
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
  })
  .strict();

export const AssetUpdateWhereInputObjectSchema = Schema;
