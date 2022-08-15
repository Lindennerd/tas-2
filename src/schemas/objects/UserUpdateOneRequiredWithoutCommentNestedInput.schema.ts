import { z } from 'zod';
import { UserCreateWithoutCommentInputObjectSchema } from './UserCreateWithoutCommentInput.schema';
import { UserUncheckedCreateWithoutCommentInputObjectSchema } from './UserUncheckedCreateWithoutCommentInput.schema';
import { UserCreateOrConnectWithoutCommentInputObjectSchema } from './UserCreateOrConnectWithoutCommentInput.schema';
import { UserUpsertWithoutCommentInputObjectSchema } from './UserUpsertWithoutCommentInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutCommentInputObjectSchema } from './UserUpdateWithoutCommentInput.schema';
import { UserUncheckedUpdateWithoutCommentInputObjectSchema } from './UserUncheckedUpdateWithoutCommentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCommentNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutCommentInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutCommentInputObjectSchema),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutCommentInputObjectSchema)
        .optional(),
    }),
    z.object({
      upsert: z
        .lazy(() => UserUpsertWithoutCommentInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutCommentInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutCommentInputObjectSchema),
        ])
        .optional(),
    }),
  ]);

export const UserUpdateOneRequiredWithoutCommentNestedInputObjectSchema =
  Schema;
