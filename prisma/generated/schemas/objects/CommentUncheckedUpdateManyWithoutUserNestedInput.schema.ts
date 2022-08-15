import { z } from 'zod';
import { CommentCreateWithoutUserInputObjectSchema } from './CommentCreateWithoutUserInput.schema';
import { CommentUncheckedCreateWithoutUserInputObjectSchema } from './CommentUncheckedCreateWithoutUserInput.schema';
import { CommentCreateOrConnectWithoutUserInputObjectSchema } from './CommentCreateOrConnectWithoutUserInput.schema';
import { CommentUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './CommentUpsertWithWhereUniqueWithoutUserInput.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './CommentUpdateWithWhereUniqueWithoutUserInput.schema';
import { CommentUpdateManyWithWhereWithoutUserInputObjectSchema } from './CommentUpdateManyWithWhereWithoutUserInput.schema';
import { CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutUserNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutUserInputObjectSchema),
          z.lazy(() => CommentCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => CommentUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => CommentCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      upsert: z
        .union([
          z.lazy(
            () => CommentUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => CommentUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      set: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      disconnect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      delete: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(
            () => CommentUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => CommentUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(() => CommentUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => CommentUpdateManyWithWhereWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      deleteMany: z
        .union([
          z.lazy(() => CommentScalarWhereInputObjectSchema),
          z.lazy(() => CommentScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const CommentUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
