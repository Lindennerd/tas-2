import { z } from 'zod';
import { SectionCreateWithoutQuestionsInputObjectSchema } from './SectionCreateWithoutQuestionsInput.schema';
import { SectionUncheckedCreateWithoutQuestionsInputObjectSchema } from './SectionUncheckedCreateWithoutQuestionsInput.schema';
import { SectionCreateOrConnectWithoutQuestionsInputObjectSchema } from './SectionCreateOrConnectWithoutQuestionsInput.schema';
import { SectionWhereUniqueInputObjectSchema } from './SectionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SectionCreateNestedOneWithoutQuestionsInput> =
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
      connect: z.lazy(() => SectionWhereUniqueInputObjectSchema).optional(),
    }),
  ]);

export const SectionCreateNestedOneWithoutQuestionsInputObjectSchema = Schema;
