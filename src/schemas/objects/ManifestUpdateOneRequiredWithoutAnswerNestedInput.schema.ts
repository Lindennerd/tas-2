import { z } from 'zod';
import { ManifestCreateWithoutAnswerInputObjectSchema } from './ManifestCreateWithoutAnswerInput.schema';
import { ManifestUncheckedCreateWithoutAnswerInputObjectSchema } from './ManifestUncheckedCreateWithoutAnswerInput.schema';
import { ManifestCreateOrConnectWithoutAnswerInputObjectSchema } from './ManifestCreateOrConnectWithoutAnswerInput.schema';
import { ManifestUpsertWithoutAnswerInputObjectSchema } from './ManifestUpsertWithoutAnswerInput.schema';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';
import { ManifestUpdateWithoutAnswerInputObjectSchema } from './ManifestUpdateWithoutAnswerInput.schema';
import { ManifestUncheckedUpdateWithoutAnswerInputObjectSchema } from './ManifestUncheckedUpdateWithoutAnswerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateOneRequiredWithoutAnswerNestedInput> =
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
      upsert: z
        .lazy(() => ManifestUpsertWithoutAnswerInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => ManifestWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => ManifestUpdateWithoutAnswerInputObjectSchema),
          z.lazy(() => ManifestUncheckedUpdateWithoutAnswerInputObjectSchema),
        ])
        .optional(),
    }),
  ]);

export const ManifestUpdateOneRequiredWithoutAnswerNestedInputObjectSchema =
  Schema;
