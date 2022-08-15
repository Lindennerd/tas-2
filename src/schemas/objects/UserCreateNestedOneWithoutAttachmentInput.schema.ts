import { z } from 'zod';
import { UserCreateWithoutAttachmentInputObjectSchema } from './UserCreateWithoutAttachmentInput.schema';
import { UserUncheckedCreateWithoutAttachmentInputObjectSchema } from './UserUncheckedCreateWithoutAttachmentInput.schema';
import { UserCreateOrConnectWithoutAttachmentInputObjectSchema } from './UserCreateOrConnectWithoutAttachmentInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutAttachmentInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAttachmentInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutAttachmentInputObjectSchema),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutAttachmentInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    }),
  ]);

export const UserCreateNestedOneWithoutAttachmentInputObjectSchema = Schema;
