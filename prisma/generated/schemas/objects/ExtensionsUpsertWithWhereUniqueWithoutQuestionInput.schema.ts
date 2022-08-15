import { z } from 'zod';
import { ExtensionsWhereUniqueInputObjectSchema } from './ExtensionsWhereUniqueInput.schema';
import { ExtensionsUpdateWithoutQuestionInputObjectSchema } from './ExtensionsUpdateWithoutQuestionInput.schema';
import { ExtensionsUncheckedUpdateWithoutQuestionInputObjectSchema } from './ExtensionsUncheckedUpdateWithoutQuestionInput.schema';
import { ExtensionsCreateWithoutQuestionInputObjectSchema } from './ExtensionsCreateWithoutQuestionInput.schema';
import { ExtensionsUncheckedCreateWithoutQuestionInputObjectSchema } from './ExtensionsUncheckedCreateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExtensionsUpsertWithWhereUniqueWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ExtensionsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExtensionsUpdateWithoutQuestionInputObjectSchema),
        z.lazy(() => ExtensionsUncheckedUpdateWithoutQuestionInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ExtensionsCreateWithoutQuestionInputObjectSchema),
        z.lazy(() => ExtensionsUncheckedCreateWithoutQuestionInputObjectSchema),
      ]),
    })
    .strict();

export const ExtensionsUpsertWithWhereUniqueWithoutQuestionInputObjectSchema =
  Schema;
