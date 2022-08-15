import { z } from 'zod';
import { AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentUpdateWithoutUserInputObjectSchema } from './AttachmentUpdateWithoutUserInput.schema';
import { AttachmentUncheckedUpdateWithoutUserInputObjectSchema } from './AttachmentUncheckedUpdateWithoutUserInput.schema';
import { AttachmentCreateWithoutUserInputObjectSchema } from './AttachmentCreateWithoutUserInput.schema';
import { AttachmentUncheckedCreateWithoutUserInputObjectSchema } from './AttachmentUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AttachmentUpdateWithoutUserInputObjectSchema),
        z.lazy(() => AttachmentUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => AttachmentCreateWithoutUserInputObjectSchema),
        z.lazy(() => AttachmentUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const AttachmentUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
