import { z } from 'zod';
import { UserCreateWithoutAttachmentInputObjectSchema } from './UserCreateWithoutAttachmentInput.schema';
import { UserUncheckedCreateWithoutAttachmentInputObjectSchema } from './UserUncheckedCreateWithoutAttachmentInput.schema';
import { UserCreateOrConnectWithoutAttachmentInputObjectSchema } from './UserCreateOrConnectWithoutAttachmentInput.schema';
import { UserUpsertWithoutAttachmentInputObjectSchema } from './UserUpsertWithoutAttachmentInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutAttachmentInputObjectSchema } from './UserUpdateWithoutAttachmentInput.schema';
import { UserUncheckedUpdateWithoutAttachmentInputObjectSchema } from './UserUncheckedUpdateWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAttachmentNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutAttachmentInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutAttachmentInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutAttachmentInputObjectSchema),
        ])
        .optional(),
    }),
  ]);

export const UserUpdateOneRequiredWithoutAttachmentNestedInputObjectSchema =
  Schema;
