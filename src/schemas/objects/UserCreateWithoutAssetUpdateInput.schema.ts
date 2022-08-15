import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AssetCreateNestedManyWithoutUserInputObjectSchema } from './AssetCreateNestedManyWithoutUserInput.schema';
import { ManifestCreateNestedManyWithoutUserInputObjectSchema } from './ManifestCreateNestedManyWithoutUserInput.schema';
import { ManifestUpdateCreateNestedManyWithoutUserInputObjectSchema } from './ManifestUpdateCreateNestedManyWithoutUserInput.schema';
import { AttachmentCreateNestedManyWithoutUserInputObjectSchema } from './AttachmentCreateNestedManyWithoutUserInput.schema';
import { AnswerCreateNestedManyWithoutUserInputObjectSchema } from './AnswerCreateNestedManyWithoutUserInput.schema';
import { CommentCreateNestedManyWithoutUserInputObjectSchema } from './CommentCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutAssetUpdateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Asset: z
      .lazy(() => AssetCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Manifest: z
      .lazy(() => ManifestCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    ManifestUpdate: z
      .lazy(() => ManifestUpdateCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Attachment: z
      .lazy(() => AttachmentCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Answer: z
      .lazy(() => AnswerCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Comment: z
      .lazy(() => CommentCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutAssetUpdateInputObjectSchema = Schema;
