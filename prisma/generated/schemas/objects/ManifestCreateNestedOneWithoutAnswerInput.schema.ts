import { z } from 'zod';
import { ManifestCreateWithoutAnswerInputObjectSchema } from './ManifestCreateWithoutAnswerInput.schema';
import { ManifestUncheckedCreateWithoutAnswerInputObjectSchema } from './ManifestUncheckedCreateWithoutAnswerInput.schema';
import { ManifestCreateOrConnectWithoutAnswerInputObjectSchema } from './ManifestCreateOrConnectWithoutAnswerInput.schema';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestCreateNestedOneWithoutAnswerInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => ManifestCreateWithoutAnswerInputObjectSchema),
          z.lazy(() => ManifestUncheckedCreateWithoutAnswerInputObjectSchema),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => ManifestCreateOrConnectWithoutAnswerInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => ManifestWhereUniqueInputObjectSchema).optional(),
    }),
  ]);

export const ManifestCreateNestedOneWithoutAnswerInputObjectSchema = Schema;
