import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ManifestRelationFilterObjectSchema } from './ManifestRelationFilter.schema';
import { ManifestWhereInputObjectSchema } from './ManifestWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ManifestUpdateWhereInputObjectSchema),
        z.lazy(() => ManifestUpdateWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ManifestUpdateWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ManifestUpdateWhereInputObjectSchema),
        z.lazy(() => ManifestUpdateWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
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

export const ManifestUpdateWhereInputObjectSchema = Schema;
