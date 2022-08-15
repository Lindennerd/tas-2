import { z } from 'zod';
import { SectionUncheckedCreateNestedManyWithoutManifestInputObjectSchema } from './SectionUncheckedCreateNestedManyWithoutManifestInput.schema';
import { ManifestUpdateUncheckedCreateNestedManyWithoutManifestInputObjectSchema } from './ManifestUpdateUncheckedCreateNestedManyWithoutManifestInput.schema';
import { AttachmentUncheckedCreateNestedManyWithoutManifestInputObjectSchema } from './AttachmentUncheckedCreateNestedManyWithoutManifestInput.schema';
import { AnswerUncheckedCreateNestedManyWithoutManifestInputObjectSchema } from './AnswerUncheckedCreateNestedManyWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUncheckedCreateWithoutAssetInput> = z
  .object({
    id: z.string().optional(),
    userId: z.string(),
    sections: z
      .lazy(
        () => SectionUncheckedCreateNestedManyWithoutManifestInputObjectSchema,
      )
      .optional(),
    createdAt: z.date().optional(),
    ManifestUpdate: z
      .lazy(
        () =>
          ManifestUpdateUncheckedCreateNestedManyWithoutManifestInputObjectSchema,
      )
      .optional(),
    Attachment: z
      .lazy(
        () =>
          AttachmentUncheckedCreateNestedManyWithoutManifestInputObjectSchema,
      )
      .optional(),
    Answer: z
      .lazy(
        () => AnswerUncheckedCreateNestedManyWithoutManifestInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ManifestUncheckedCreateWithoutAssetInputObjectSchema = Schema;
