import { z } from 'zod';
import { ManifestUpdateUncheckedCreateNestedManyWithoutManifestInputObjectSchema } from './ManifestUpdateUncheckedCreateNestedManyWithoutManifestInput.schema';
import { AttachmentUncheckedCreateNestedManyWithoutManifestInputObjectSchema } from './AttachmentUncheckedCreateNestedManyWithoutManifestInput.schema';
import { AnswerUncheckedCreateNestedManyWithoutManifestInputObjectSchema } from './AnswerUncheckedCreateNestedManyWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUncheckedCreateWithoutSectionsInput> = z
  .object({
    id: z.string().optional(),
    assetId: z.string(),
    userId: z.string(),
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

export const ManifestUncheckedCreateWithoutSectionsInputObjectSchema = Schema;
