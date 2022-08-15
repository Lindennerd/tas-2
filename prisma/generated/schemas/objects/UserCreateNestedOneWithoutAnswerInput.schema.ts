import { z } from 'zod';
import { UserCreateWithoutAnswerInputObjectSchema } from './UserCreateWithoutAnswerInput.schema';
import { UserUncheckedCreateWithoutAnswerInputObjectSchema } from './UserUncheckedCreateWithoutAnswerInput.schema';
import { UserCreateOrConnectWithoutAnswerInputObjectSchema } from './UserCreateOrConnectWithoutAnswerInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutAnswerInput> = z.union(
  [
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    }),
  ],
);

export const UserCreateNestedOneWithoutAnswerInputObjectSchema = Schema;
