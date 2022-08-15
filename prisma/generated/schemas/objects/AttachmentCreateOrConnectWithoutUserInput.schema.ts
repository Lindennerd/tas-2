import { z } from 'zod';
import { AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentCreateWithoutUserInputObjectSchema } from './AttachmentCreateWithoutUserInput.schema';
import { AttachmentUncheckedCreateWithoutUserInputObjectSchema } from './AttachmentUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AttachmentCreateWithoutUserInputObjectSchema),
      z.lazy(() => AttachmentUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AttachmentCreateOrConnectWithoutUserInputObjectSchema = Schema;
