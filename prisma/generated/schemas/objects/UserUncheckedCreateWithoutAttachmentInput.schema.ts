import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AccountUncheckedCreateNestedManyWithoutUserInput.schema';
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutUserInput.schema';
import { AssetUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AssetUncheckedCreateNestedManyWithoutUserInput.schema';
import { AssetUpdateUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AssetUpdateUncheckedCreateNestedManyWithoutUserInput.schema';
import { ManifestUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ManifestUncheckedCreateNestedManyWithoutUserInput.schema';
import { ManifestUpdateUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ManifestUpdateUncheckedCreateNestedManyWithoutUserInput.schema';
import { AnswerUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AnswerUncheckedCreateNestedManyWithoutUserInput.schema';
import { CommentUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutAttachmentInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Asset: z
      .lazy(() => AssetUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    AssetUpdate: z
      .lazy(
        () => AssetUpdateUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    Manifest: z
      .lazy(() => ManifestUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    ManifestUpdate: z
      .lazy(
        () =>
          ManifestUpdateUncheckedCreateNestedManyWithoutUserInputObjectSchema,
      )
      .optional(),
    Answer: z
      .lazy(() => AnswerUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    Comment: z
      .lazy(() => CommentUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutAttachmentInputObjectSchema = Schema;
