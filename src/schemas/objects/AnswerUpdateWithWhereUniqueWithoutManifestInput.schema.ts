import { z } from 'zod';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerUpdateWithoutManifestInputObjectSchema } from './AnswerUpdateWithoutManifestInput.schema';
import { AnswerUncheckedUpdateWithoutManifestInputObjectSchema } from './AnswerUncheckedUpdateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUpdateWithWhereUniqueWithoutManifestInput> =
  z
    .object({
      where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => AnswerUpdateWithoutManifestInputObjectSchema),
        z.lazy(() => AnswerUncheckedUpdateWithoutManifestInputObjectSchema),
      ]),
    })
    .strict();

export const AnswerUpdateWithWhereUniqueWithoutManifestInputObjectSchema =
  Schema;
