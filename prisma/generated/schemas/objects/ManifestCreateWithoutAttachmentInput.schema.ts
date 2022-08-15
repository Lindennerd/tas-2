import { z } from 'zod';
import { AssetCreateNestedOneWithoutManifestInputObjectSchema } from './AssetCreateNestedOneWithoutManifestInput.schema';
import { UserCreateNestedOneWithoutManifestInputObjectSchema } from './UserCreateNestedOneWithoutManifestInput.schema';
import { SectionCreateNestedManyWithoutManifestInputObjectSchema } from './SectionCreateNestedManyWithoutManifestInput.schema';
import { ManifestUpdateCreateNestedManyWithoutManifestInputObjectSchema } from './ManifestUpdateCreateNestedManyWithoutManifestInput.schema';
import { AnswerCreateNestedManyWithoutManifestInputObjectSchema } from './AnswerCreateNestedManyWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestCreateWithoutAttachmentInput> = z
  .object({
    id: z.string().optional(),
    asset: z.lazy(() => AssetCreateNestedOneWithoutManifestInputObjectSchema),
    user: z.lazy(() => UserCreateNestedOneWithoutManifestInputObjectSchema),
    sections: z
      .lazy(() => SectionCreateNestedManyWithoutManifestInputObjectSchema)
      .optional(),
    createdAt: z.date().optional(),
    ManifestUpdate: z
      .lazy(
        () => ManifestUpdateCreateNestedManyWithoutManifestInputObjectSchema,
      )
      .optional(),
    Answer: z
      .lazy(() => AnswerCreateNestedManyWithoutManifestInputObjectSchema)
      .optional(),
  })
  .strict();

export const ManifestCreateWithoutAttachmentInputObjectSchema = Schema;
