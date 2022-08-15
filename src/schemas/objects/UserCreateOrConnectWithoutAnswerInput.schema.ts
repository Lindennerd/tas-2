import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAnswerInputObjectSchema } from './UserCreateWithoutAnswerInput.schema';
import { UserUncheckedCreateWithoutAnswerInputObjectSchema } from './UserUncheckedCreateWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutAnswerInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutAnswerInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAnswerInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutAnswerInputObjectSchema = Schema;
