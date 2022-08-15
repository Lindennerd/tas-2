import { z } from 'zod';
import { AttachmentCreateWithoutUserInputObjectSchema } from './AttachmentCreateWithoutUserInput.schema';
import { AttachmentUncheckedCreateWithoutUserInputObjectSchema } from './AttachmentUncheckedCreateWithoutUserInput.schema';
import { AttachmentCreateOrConnectWithoutUserInputObjectSchema } from './AttachmentCreateOrConnectWithoutUserInput.schema';
import { AttachmentUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './AttachmentUpsertWithWhereUniqueWithoutUserInput.schema';
import { AttachmentWhereUniqueInputObjectSchema } from './AttachmentWhereUniqueInput.schema';
import { AttachmentUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './AttachmentUpdateWithWhereUniqueWithoutUserInput.schema';
import { AttachmentUpdateManyWithWhereWithoutUserInputObjectSchema } from './AttachmentUpdateManyWithWhereWithoutUserInput.schema';
import { AttachmentScalarWhereInputObjectSchema } from './AttachmentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AttachmentUncheckedUpdateManyWithoutUserNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => AttachmentCreateWithoutUserInputObjectSchema),
          z.lazy(() => AttachmentCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => AttachmentUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => AttachmentUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => AttachmentCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => AttachmentCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      upsert: z
        .union([
          z.lazy(
            () => AttachmentUpsertWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => AttachmentUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      set: z
        .union([
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      disconnect: z
        .union([
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      delete: z
        .union([
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema),
          z.lazy(() => AttachmentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(
            () => AttachmentUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => AttachmentUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      updateMany: z
        .union([
          z.lazy(
            () => AttachmentUpdateManyWithWhereWithoutUserInputObjectSchema,
          ),
          z
            .lazy(
              () => AttachmentUpdateManyWithWhereWithoutUserInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      deleteMany: z
        .union([
          z.lazy(() => AttachmentScalarWhereInputObjectSchema),
          z.lazy(() => AttachmentScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const AttachmentUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Schema;
