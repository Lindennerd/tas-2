import { z } from 'zod';
import { AttachmentScalarWhereInputObjectSchema } from './AttachmentScalarWhereInput.schema';
import { AttachmentUpdateManyMutationInputObjectSchema } from './AttachmentUpdateManyMutationInput.schema';
import { AttachmentUncheckedUpdateManyWithoutAttachmentInputObjectSchema } from './AttachmentUncheckedUpdateManyWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AttachmentScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AttachmentUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => AttachmentUncheckedUpdateManyWithoutAttachmentInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AttachmentUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
