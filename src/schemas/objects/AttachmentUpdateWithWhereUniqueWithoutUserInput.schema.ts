import { z } from 'zod';
import { AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentUpdateWithoutUserInputObjectSchema } from './AttachmentUpdateWithoutUserInput.schema';
import { AttachmentUncheckedUpdateWithoutUserInputObjectSchema } from './AttachmentUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AttachmentUpdateWithoutUserInputObjectSchema),
        z.lazy(() => AttachmentUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const AttachmentUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
