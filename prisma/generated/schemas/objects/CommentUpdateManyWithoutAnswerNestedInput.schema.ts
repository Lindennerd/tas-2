import { z } from 'zod';
import { CommentCreateWithoutAnswerInputObjectSchema } from './CommentCreateWithoutAnswerInput.schema';
import { CommentUncheckedCreateWithoutAnswerInputObjectSchema } from './CommentUncheckedCreateWithoutAnswerInput.schema';
import { CommentCreateOrConnectWithoutAnswerInputObjectSchema } from './CommentCreateOrConnectWithoutAnswerInput.schema';
import { CommentUpsertWithWhereUniqueWithoutAnswerInputObjectSchema } from './CommentUpsertWithWhereUniqueWithoutAnswerInput.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithWhereUniqueWithoutAnswerInputObjectSchema } from './CommentUpdateWithWhereUniqueWithoutAnswerInput.schema';
import { CommentUpdateManyWithWhereWithoutAnswerInputObjectSchema } from './CommentUpdateManyWithWhereWithoutAnswerInput.schema';
import { CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateManyWithoutAnswerNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutAnswerInputObjectSchema),
          z.lazy(() => CommentCreateWithoutAnswerInputObjectSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutAnswerInputObjectSchema),
          z
            .lazy(() => CommentUncheckedCreateWithoutAnswerInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutAnswerInputObjectSchema),
          z
            .lazy(() => CommentCreateOrConnectWithoutAnswerInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      upsert: z
        .union([
          z.lazy(
            () => CommentUpsertWithWhereUniqueWithoutAnswerInputObjectSchema,
          ),
          z
            .lazy(
              () => CommentUpsertWithWhereUniqueWithoutAnswerInputObjectSchema,
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
            () => CommentUpdateWithWhereUniqueWithoutAnswerInputObjectSchema,
          ),
          z
            .lazy(
              () => CommentUpdateWithWhereUniqueWithoutAnswerInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(
            () => CommentUpdateManyWithWhereWithoutAnswerInputObjectSchema,
          ),
          z
            .lazy(
              () => CommentUpdateManyWithWhereWithoutAnswerInputObjectSchema,
            )
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

export const CommentUpdateManyWithoutAnswerNestedInputObjectSchema = Schema;
