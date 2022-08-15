import { z } from 'zod';
import { AttachmentCreateWithoutUserInputObjectSchema } from './AttachmentCreateWithoutUserInput.schema';
import { AttachmentUncheckedCreateWithoutUserInputObjectSchema } from './AttachmentUncheckedCreateWithoutUserInput.schema';
import { AttachmentCreateOrConnectWithoutUserInputObjectSchema } from './AttachmentCreateOrConnectWithoutUserInput.schema';
import { AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentCreateNestedManyWithoutUserInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => AttachmentCreateWithoutUserInputObjectSchema),
          z.lazy(() => AttachmentCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => AttachmentUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => AttachmentUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => AttachmentCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => AttachmentCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const AttachmentCreateNestedManyWithoutUserInputObjectSchema = Schema;
