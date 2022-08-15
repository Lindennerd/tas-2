import { z } from 'zod';
import { AssetCreateNestedOneWithoutManifestInputObjectSchema } from './AssetCreateNestedOneWithoutManifestInput.schema';
import { SectionCreateNestedManyWithoutManifestInputObjectSchema } from './SectionCreateNestedManyWithoutManifestInput.schema';
import { ManifestUpdateCreateNestedManyWithoutManifestInputObjectSchema } from './ManifestUpdateCreateNestedManyWithoutManifestInput.schema';
import { AttachmentCreateNestedManyWithoutManifestInputObjectSchema } from './AttachmentCreateNestedManyWithoutManifestInput.schema';
import { AnswerCreateNestedManyWithoutManifestInputObjectSchema } from './AnswerCreateNestedManyWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    asset: z.lazy(() => AssetCreateNestedOneWithoutManifestInputObjectSchema),
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

export const ManifestCreateWithoutUserInputObjectSchema = Schema;
