import { z } from 'zod';
import { OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema';
import { OptionUpdateWithoutQuestionInputObjectSchema } from './OptionUpdateWithoutQuestionInput.schema';
import { OptionUncheckedUpdateWithoutQuestionInputObjectSchema } from './OptionUncheckedUpdateWithoutQuestionInput.schema';
import { OptionCreateWithoutQuestionInputObjectSchema } from './OptionCreateWithoutQuestionInput.schema';
import { OptionUncheckedCreateWithoutQuestionInputObjectSchema } from './OptionUncheckedCreateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OptionUpsertWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => OptionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => OptionUpdateWithoutQuestionInputObjectSchema),
        z.lazy(() => OptionUncheckedUpdateWithoutQuestionInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => OptionCreateWithoutQuestionInputObjectSchema),
        z.lazy(() => OptionUncheckedCreateWithoutQuestionInputObjectSchema),
      ]),
    })
    .strict();

export const OptionUpsertWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema;
