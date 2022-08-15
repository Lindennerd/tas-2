import { z } from 'zod';
import { UserUpdateWithoutAnswerInputObjectSchema } from './UserUpdateWithoutAnswerInput.schema';
import { UserUncheckedUpdateWithoutAnswerInputObjectSchema } from './UserUncheckedUpdateWithoutAnswerInput.schema';
import { UserCreateWithoutAnswerInputObjectSchema } from './UserCreateWithoutAnswerInput.schema';
import { UserUncheckedCreateWithoutAnswerInputObjectSchema } from './UserUncheckedCreateWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutAnswerInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutAnswerInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutAnswerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutAnswerInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAnswerInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutAnswerInputObjectSchema = Schema;
