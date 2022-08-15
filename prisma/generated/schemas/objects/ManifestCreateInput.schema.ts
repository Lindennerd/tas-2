import { z } from 'zod';
import { AssetCreateNestedOneWithoutManifestInputObjectSchema } from './AssetCreateNestedOneWithoutManifestInput.schema';
import { UserCreateNestedOneWithoutManifestInputObjectSchema } from './UserCreateNestedOneWithoutManifestInput.schema';
import { SectionCreateNestedManyWithoutManifestInputObjectSchema } from './SectionCreateNestedManyWithoutManifestInput.schema';
import { ManifestUpdateCreateNestedManyWithoutManifestInputObjectSchema } from './ManifestUpdateCreateNestedManyWithoutManifestInput.schema';
import { AttachmentCreateNestedManyWithoutManifestInputObjectSchema } from './AttachmentCreateNestedManyWithoutManifestInput.schema';
import { AnswerCreateNestedManyWithoutManifestInputObjectSchema } from './AnswerCreateNestedManyWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestCreateInput> = z
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
    Attachment: z
      .lazy(() => AttachmentCreateNestedManyWithoutManifestInputObjectSchema)
      .optional(),
    Answer: z
      .lazy(() => AnswerCreateNestedManyWithoutManifestInputObjectSchema)
      .optional(),
  })
  .strict();

export const ManifestCreateInputObjectSchema = Schema;
