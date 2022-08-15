import { z } from 'zod';
import { SectionCreateWithoutQuestionsInputObjectSchema } from './SectionCreateWithoutQuestionsInput.schema';
import { SectionUncheckedCreateWithoutQuestionsInputObjectSchema } from './SectionUncheckedCreateWithoutQuestionsInput.schema';
import { SectionCreateOrConnectWithoutQuestionsInputObjectSchema } from './SectionCreateOrConnectWithoutQuestionsInput.schema';
import { SectionUpsertWithoutQuestionsInputObjectSchema } from './SectionUpsertWithoutQuestionsInput.schema';
import { SectionWhereUniqueInputObjectSchema } from './SectionWhereUniqueInput.schema';
import { SectionUpdateWithoutQuestionsInputObjectSchema } from './SectionUpdateWithoutQuestionsInput.schema';
import { SectionUncheckedUpdateWithoutQuestionsInputObjectSchema } from './SectionUncheckedUpdateWithoutQuestionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionUpdateOneWithoutQuestionsNestedInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => SectionCreateWithoutQuestionsInputObjectSchema),
          z.lazy(() => SectionUncheckedCreateWithoutQuestionsInputObjectSchema),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => SectionCreateOrConnectWithoutQuestionsInputObjectSchema)
        .optional(),
    }),
    z.object({
      upsert: z
        .lazy(() => SectionUpsertWithoutQuestionsInputObjectSchema)
        .optional(),
    }),
    z.object({
      disconnect: z.boolean().optional(),
    }),
    z.object({
      delete: z.boolean().optional(),
    }),
    z.object({
      connect: z.lazy(() => SectionWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => SectionUpdateWithoutQuestionsInputObjectSchema),
          z.lazy(() => SectionUncheckedUpdateWithoutQuestionsInputObjectSchema),
        ])
        .optional(),
    }),
  ]);

export const SectionUpdateOneWithoutQuestionsNestedInputObjectSchema = Schema;
