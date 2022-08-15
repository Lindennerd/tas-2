import { z } from 'zod';
import { ManifestUpdateWithoutAnswerInputObjectSchema } from './ManifestUpdateWithoutAnswerInput.schema';
import { ManifestUncheckedUpdateWithoutAnswerInputObjectSchema } from './ManifestUncheckedUpdateWithoutAnswerInput.schema';
import { ManifestCreateWithoutAnswerInputObjectSchema } from './ManifestCreateWithoutAnswerInput.schema';
import { ManifestUncheckedCreateWithoutAnswerInputObjectSchema } from './ManifestUncheckedCreateWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpsertWithoutAnswerInput> = z
  .object({
    update: z.union([
      z.lazy(() => ManifestUpdateWithoutAnswerInputObjectSchema),
      z.lazy(() => ManifestUncheckedUpdateWithoutAnswerInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ManifestCreateWithoutAnswerInputObjectSchema),
      z.lazy(() => ManifestUncheckedCreateWithoutAnswerInputObjectSchema),
    ]),
  })
  .strict();

export const ManifestUpsertWithoutAnswerInputObjectSchema = Schema;
