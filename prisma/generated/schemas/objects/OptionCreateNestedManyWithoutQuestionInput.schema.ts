import { z } from 'zod';
import { OptionCreateWithoutQuestionInputObjectSchema } from './OptionCreateWithoutQuestionInput.schema';
import { OptionUncheckedCreateWithoutQuestionInputObjectSchema } from './OptionUncheckedCreateWithoutQuestionInput.schema';
import { OptionCreateOrConnectWithoutQuestionInputObjectSchema } from './OptionCreateOrConnectWithoutQuestionInput.schema';
import { OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OptionCreateNestedManyWithoutQuestionInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => OptionCreateWithoutQuestionInputObjectSchema),
          z.lazy(() => OptionCreateWithoutQuestionInputObjectSchema).array(),
          z.lazy(() => OptionUncheckedCreateWithoutQuestionInputObjectSchema),
          z
            .lazy(() => OptionUncheckedCreateWithoutQuestionInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => OptionCreateOrConnectWithoutQuestionInputObjectSchema),
          z
            .lazy(() => OptionCreateOrConnectWithoutQuestionInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => OptionWhereUniqueInputObjectSchema),
          z.lazy(() => OptionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const OptionCreateNestedManyWithoutQuestionInputObjectSchema = Schema;
