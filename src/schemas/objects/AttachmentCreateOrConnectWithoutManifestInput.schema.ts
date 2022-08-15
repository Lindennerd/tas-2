import { z } from 'zod';
import { AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentCreateWithoutManifestInputObjectSchema } from './AttachmentCreateWithoutManifestInput.schema';
import { AttachmentUncheckedCreateWithoutManifestInputObjectSchema } from './AttachmentUncheckedCreateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentCreateOrConnectWithoutManifestInput> =
  z
    .object({
      where: z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => AttachmentCreateWithoutManifestInputObjectSchema),
        z.lazy(() => AttachmentUncheckedCreateWithoutManifestInputObjectSchema),
      ]),
    })
    .strict();

export const AttachmentCreateOrConnectWithoutManifestInputObjectSchema = Schema;
