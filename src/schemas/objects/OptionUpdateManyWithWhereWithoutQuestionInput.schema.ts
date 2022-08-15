import { z } from 'zod';
import { OptionScalarWhereInputObjectSchema } from './OptionScalarWhereInput.schema';
import { OptionUpdateManyMutationInputObjectSchema } from './OptionUpdateManyMutationInput.schema';
import { OptionUncheckedUpdateManyWithoutOptionInputObjectSchema } from './OptionUncheckedUpdateManyWithoutOptionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OptionUpdateManyWithWhereWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => OptionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => OptionUpdateManyMutationInputObjectSchema),
        z.lazy(() => OptionUncheckedUpdateManyWithoutOptionInputObjectSchema),
      ]),
    })
    .strict();

export const OptionUpdateManyWithWhereWithoutQuestionInputObjectSchema = Schema;
