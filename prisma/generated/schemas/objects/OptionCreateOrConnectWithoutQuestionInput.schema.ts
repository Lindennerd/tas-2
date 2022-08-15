import { z } from 'zod';
import { OptionWhereUniqueInputObjectSchema } from './OptionWhereUniqueInput.schema';
import { OptionCreateWithoutQuestionInputObjectSchema } from './OptionCreateWithoutQuestionInput.schema';
import { OptionUncheckedCreateWithoutQuestionInputObjectSchema } from './OptionUncheckedCreateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OptionCreateOrConnectWithoutQuestionInput> = z
  .object({
    where: z.lazy(() => OptionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OptionCreateWithoutQuestionInputObjectSchema),
      z.lazy(() => OptionUncheckedCreateWithoutQuestionInputObjectSchema),
    ]),
  })
  .strict();

export const OptionCreateOrConnectWithoutQuestionInputObjectSchema = Schema;
