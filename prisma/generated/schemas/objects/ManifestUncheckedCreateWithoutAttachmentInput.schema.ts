import { z } from 'zod';
import { SectionUncheckedCreateNestedManyWithoutManifestInputObjectSchema } from './SectionUncheckedCreateNestedManyWithoutManifestInput.schema';
import { ManifestUpdateUncheckedCreateNestedManyWithoutManifestInputObjectSchema } from './ManifestUpdateUncheckedCreateNestedManyWithoutManifestInput.schema';
import { AnswerUncheckedCreateNestedManyWithoutManifestInputObjectSchema } from './AnswerUncheckedCreateNestedManyWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUncheckedCreateWithoutAttachmentInput> =
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
      ManifestUpdate: z
        .lazy(
          () =>
            ManifestUpdateUncheckedCreateNestedManyWithoutManifestInputObjectSchema,
        )
        .optional(),
      Answer: z
        .lazy(
          () => AnswerUncheckedCreateNestedManyWithoutManifestInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ManifestUncheckedCreateWithoutAttachmentInputObjectSchema = Schema;
