import { z } from 'zod';
import { QuestionCreateWithoutExtensionsInputObjectSchema } from './QuestionCreateWithoutExtensionsInput.schema';
import { QuestionUncheckedCreateWithoutExtensionsInputObjectSchema } from './QuestionUncheckedCreateWithoutExtensionsInput.schema';
import { QuestionCreateOrConnectWithoutExtensionsInputObjectSchema } from './QuestionCreateOrConnectWithoutExtensionsInput.schema';
import { QuestionUpsertWithoutExtensionsInputObjectSchema } from './QuestionUpsertWithoutExtensionsInput.schema';
import { QuestionWhereUniqueInputObjectSchema } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutExtensionsInputObjectSchema } from './QuestionUpdateWithoutExtensionsInput.schema';
import { QuestionUncheckedUpdateWithoutExtensionsInputObjectSchema } from './QuestionUncheckedUpdateWithoutExtensionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.QuestionUpdateOneRequiredWithoutExtensionsNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => QuestionCreateWithoutExtensionsInputObjectSchema),
          z.lazy(
            () => QuestionUncheckedCreateWithoutExtensionsInputObjectSchema,
          ),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => QuestionCreateOrConnectWithoutExtensionsInputObjectSchema)
        .optional(),
    }),
    z.object({
      upsert: z
        .lazy(() => QuestionUpsertWithoutExtensionsInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => QuestionWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => QuestionUpdateWithoutExtensionsInputObjectSchema),
          z.lazy(
            () => QuestionUncheckedUpdateWithoutExtensionsInputObjectSchema,
          ),
        ])
        .optional(),
    }),
  ]);

export const QuestionUpdateOneRequiredWithoutExtensionsNestedInputObjectSchema =
  Schema;
