import { z } from 'zod';
import { OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema';
import { OptionUpdateWithoutQuestionInputObjectSchema } from './OptionUpdateWithoutQuestionInput.schema';
import { OptionUncheckedUpdateWithoutQuestionInputObjectSchema } from './OptionUncheckedUpdateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OptionUpdateWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => OptionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => OptionUpdateWithoutQuestionInputObjectSchema),
        z.lazy(() => OptionUncheckedUpdateWithoutQuestionInputObjectSchema),
      ]),
    })
    .strict();

export const OptionUpdateWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema;
