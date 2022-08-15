import { z } from 'zod';
import { ExtensionsCreateWithoutQuestionInputObjectSchema } from './ExtensionsCreateWithoutQuestionInput.schema';
import { ExtensionsUncheckedCreateWithoutQuestionInputObjectSchema } from './ExtensionsUncheckedCreateWithoutQuestionInput.schema';
import { ExtensionsCreateOrConnectWithoutQuestionInputObjectSchema } from './ExtensionsCreateOrConnectWithoutQuestionInput.schema';
import { ExtensionsWhereUniqueInputObjectSchema } from './ExtensionsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExtensionsUncheckedCreateNestedManyWithoutQuestionInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => ExtensionsCreateWithoutQuestionInputObjectSchema),
          z
            .lazy(() => ExtensionsCreateWithoutQuestionInputObjectSchema)
            .array(),
          z.lazy(
            () => ExtensionsUncheckedCreateWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () => ExtensionsUncheckedCreateWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(
            () => ExtensionsCreateOrConnectWithoutQuestionInputObjectSchema,
          ),
          z
            .lazy(
              () => ExtensionsCreateOrConnectWithoutQuestionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => ExtensionsWhereUniqueInputObjectSchema),
          z.lazy(() => ExtensionsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const ExtensionsUncheckedCreateNestedManyWithoutQuestionInputObjectSchema =
  Schema;
