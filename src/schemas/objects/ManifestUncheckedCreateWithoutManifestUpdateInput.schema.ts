import { z } from 'zod';
import { SectionUncheckedCreateNestedManyWithoutManifestInputObjectSchema } from './SectionUncheckedCreateNestedManyWithoutManifestInput.schema';
import { AttachmentUncheckedCreateNestedManyWithoutManifestInputObjectSchema } from './AttachmentUncheckedCreateNestedManyWithoutManifestInput.schema';
import { AnswerUncheckedCreateNestedManyWithoutManifestInputObjectSchema } from './AnswerUncheckedCreateNestedManyWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUncheckedCreateWithoutManifestUpdateInput> =
  z
    .object({
      id: z.string().optional(),
      assetId: z.string(),
      userId: z.string(),
      sections: z
        .lazy(
          () =>
            SectionUncheckedCreateNestedManyWithoutManifestInputObjectSchema,
        )
        .optional(),
      createdAt: z.date().optional(),
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

export const ManifestUncheckedCreateWithoutManifestUpdateInputObjectSchema =
  Schema;
