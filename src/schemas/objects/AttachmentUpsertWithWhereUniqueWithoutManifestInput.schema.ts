import { z } from 'zod';
import { AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentUpdateWithoutManifestInputObjectSchema } from './AttachmentUpdateWithoutManifestInput.schema';
import { AttachmentUncheckedUpdateWithoutManifestInputObjectSchema } from './AttachmentUncheckedUpdateWithoutManifestInput.schema';
import { AttachmentCreateWithoutManifestInputObjectSchema } from './AttachmentCreateWithoutManifestInput.schema';
import { AttachmentUncheckedCreateWithoutManifestInputObjectSchema } from './AttachmentUncheckedCreateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentUpsertWithWhereUniqueWithoutManifestInput> =
  z
    .object({
      where: z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AttachmentUpdateWithoutManifestInputObjectSchema),
        z.lazy(() => AttachmentUncheckedUpdateWithoutManifestInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => AttachmentCreateWithoutManifestInputObjectSchema),
        z.lazy(() => AttachmentUncheckedCreateWithoutManifestInputObjectSchema),
      ]),
    })
    .strict();

export const AttachmentUpsertWithWhereUniqueWithoutManifestInputObjectSchema =
  Schema;
