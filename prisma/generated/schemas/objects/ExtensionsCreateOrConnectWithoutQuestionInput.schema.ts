import { z } from 'zod';
import { ExtensionsWhereUniqueInputObjectSchema } from './ExtensionsWhereUniqueInput.schema';
import { ExtensionsCreateWithoutQuestionInputObjectSchema } from './ExtensionsCreateWithoutQuestionInput.schema';
import { ExtensionsUncheckedCreateWithoutQuestionInputObjectSchema } from './ExtensionsUncheckedCreateWithoutQuestionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExtensionsCreateOrConnectWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ExtensionsWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ExtensionsCreateWithoutQuestionInputObjectSchema),
        z.lazy(() => ExtensionsUncheckedCreateWithoutQuestionInputObjectSchema),
      ]),
    })
    .strict();

export const ExtensionsCreateOrConnectWithoutQuestionInputObjectSchema = Schema;
