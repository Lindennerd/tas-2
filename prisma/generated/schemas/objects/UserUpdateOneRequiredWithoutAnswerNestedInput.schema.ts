import { z } from 'zod';
import { UserCreateWithoutAnswerInputObjectSchema } from './UserCreateWithoutAnswerInput.schema';
import { UserUncheckedCreateWithoutAnswerInputObjectSchema } from './UserUncheckedCreateWithoutAnswerInput.schema';
import { UserCreateOrConnectWithoutAnswerInputObjectSchema } from './UserCreateOrConnectWithoutAnswerInput.schema';
import { UserUpsertWithoutAnswerInputObjectSchema } from './UserUpsertWithoutAnswerInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutAnswerInputObjectSchema } from './UserUpdateWithoutAnswerInput.schema';
import { UserUncheckedUpdateWithoutAnswerInputObjectSchema } from './UserUncheckedUpdateWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAnswerNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAnswerInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutAnswerInputObjectSchema),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutAnswerInputObjectSchema)
        .optional(),
    }),
    z.object({
      upsert: z.lazy(() => UserUpsertWithoutAnswerInputObjectSchema).optional(),
    }),
    z.object({
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutAnswerInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutAnswerInputObjectSchema),
        ])
        .optional(),
    }),
  ]);

export const UserUpdateOneRequiredWithoutAnswerNestedInputObjectSchema = Schema;
