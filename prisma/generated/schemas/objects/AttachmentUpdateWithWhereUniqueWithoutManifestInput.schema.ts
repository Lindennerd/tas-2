import { z } from 'zod';
import { AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentUpdateWithoutManifestInputObjectSchema } from './AttachmentUpdateWithoutManifestInput.schema';
import { AttachmentUncheckedUpdateWithoutManifestInputObjectSchema } from './AttachmentUncheckedUpdateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentUpdateWithWhereUniqueWithoutManifestInput> =
  z
    .object({
      where: z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AttachmentUpdateWithoutManifestInputObjectSchema),
        z.lazy(() => AttachmentUncheckedUpdateWithoutManifestInputObjectSchema),
      ]),
    })
    .strict();

export const AttachmentUpdateWithWhereUniqueWithoutManifestInputObjectSchema =
  Schema;
