import { z } from 'zod';
import { UserUpdateWithoutAttachmentInputObjectSchema } from './UserUpdateWithoutAttachmentInput.schema';
import { UserUncheckedUpdateWithoutAttachmentInputObjectSchema } from './UserUncheckedUpdateWithoutAttachmentInput.schema';
import { UserCreateWithoutAttachmentInputObjectSchema } from './UserCreateWithoutAttachmentInput.schema';
import { UserUncheckedCreateWithoutAttachmentInputObjectSchema } from './UserUncheckedCreateWithoutAttachmentInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutAttachmentInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutAttachmentInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutAttachmentInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutAttachmentInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAttachmentInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutAttachmentInputObjectSchema = Schema;
