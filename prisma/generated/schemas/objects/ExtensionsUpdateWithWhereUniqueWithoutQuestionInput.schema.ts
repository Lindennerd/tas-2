import { z } from 'zod';
import { ExtensionsWhereUniqueInputObjectSchema } from './ExtensionsWhereUniqueInput.schema';
import { ExtensionsUpdateWithoutQuestionInputObjectSchema } from './ExtensionsUpdateWithoutQuestionInput.schema';
import { ExtensionsUncheckedUpdateWithoutQuestionInputObjectSchema } from './ExtensionsUncheckedUpdateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExtensionsUpdateWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ExtensionsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExtensionsUpdateWithoutQuestionInputObjectSchema),
        z.lazy(() => ExtensionsUncheckedUpdateWithoutQuestionInputObjectSchema),
      ]),
    })
    .strict();

export const ExtensionsUpdateWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema;
