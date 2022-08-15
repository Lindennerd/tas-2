import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAttachmentInputObjectSchema } from './UserCreateWithoutAttachmentInput.schema';
import { UserUncheckedCreateWithoutAttachmentInputObjectSchema } from './UserUncheckedCreateWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutAttachmentInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutAttachmentInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAttachmentInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutAttachmentInputObjectSchema = Schema;
