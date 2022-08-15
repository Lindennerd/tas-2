import { z } from 'zod';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';
import { ManifestCreateWithoutAnswerInputObjectSchema } from './ManifestCreateWithoutAnswerInput.schema';
import { ManifestUncheckedCreateWithoutAnswerInputObjectSchema } from './ManifestUncheckedCreateWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestCreateOrConnectWithoutAnswerInput> = z
  .object({
    where: z.lazy(() => ManifestWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ManifestCreateWithoutAnswerInputObjectSchema),
      z.lazy(() => ManifestUncheckedCreateWithoutAnswerInputObjectSchema),
    ]),
  })
  .strict();

export const ManifestCreateOrConnectWithoutAnswerInputObjectSchema = Schema;
