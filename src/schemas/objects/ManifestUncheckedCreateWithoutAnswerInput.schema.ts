import { z } from 'zod';
import { SectionUncheckedCreateNestedManyWithoutManifestInputObjectSchema } from './SectionUncheckedCreateNestedManyWithoutManifestInput.schema';
import { ManifestUpdateUncheckedCreateNestedManyWithoutManifestInputObjectSchema } from './ManifestUpdateUncheckedCreateNestedManyWithoutManifestInput.schema';
import { AttachmentUncheckedCreateNestedManyWithoutManifestInputObjectSchema } from './AttachmentUncheckedCreateNestedManyWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUncheckedCreateWithoutAnswerInput> = z
  .object({
    id: z.string().optional(),
    assetId: z.string(),
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
  })
  .strict();

export const ManifestUncheckedCreateWithoutAnswerInputObjectSchema = Schema;
