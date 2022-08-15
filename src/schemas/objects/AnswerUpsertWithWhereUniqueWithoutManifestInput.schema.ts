import { z } from 'zod';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerUpdateWithoutManifestInputObjectSchema } from './AnswerUpdateWithoutManifestInput.schema';
import { AnswerUncheckedUpdateWithoutManifestInputObjectSchema } from './AnswerUncheckedUpdateWithoutManifestInput.schema';
import { AnswerCreateWithoutManifestInputObjectSchema } from './AnswerCreateWithoutManifestInput.schema';
import { AnswerUncheckedCreateWithoutManifestInputObjectSchema } from './AnswerUncheckedCreateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerUpsertWithWhereUniqueWithoutManifestInput> =
  z
    .object({
      where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => AnswerUpdateWithoutManifestInputObjectSchema),
        z.lazy(() => AnswerUncheckedUpdateWithoutManifestInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => AnswerCreateWithoutManifestInputObjectSchema),
        z.lazy(() => AnswerUncheckedCreateWithoutManifestInputObjectSchema),
      ]),
    })
    .strict();

export const AnswerUpsertWithWhereUniqueWithoutManifestInputObjectSchema =
  Schema;
