import { z } from 'zod';
import { AnswerCreateWithoutManifestInputObjectSchema } from './AnswerCreateWithoutManifestInput.schema';
import { AnswerUncheckedCreateWithoutManifestInputObjectSchema } from './AnswerUncheckedCreateWithoutManifestInput.schema';
import { AnswerCreateOrConnectWithoutManifestInputObjectSchema } from './AnswerCreateOrConnectWithoutManifestInput.schema';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerCreateNestedManyWithoutManifestInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => AnswerCreateWithoutManifestInputObjectSchema),
          z.lazy(() => AnswerCreateWithoutManifestInputObjectSchema).array(),
          z.lazy(() => AnswerUncheckedCreateWithoutManifestInputObjectSchema),
          z
            .lazy(() => AnswerUncheckedCreateWithoutManifestInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .union([
          z.lazy(() => AnswerCreateOrConnectWithoutManifestInputObjectSchema),
          z
            .lazy(() => AnswerCreateOrConnectWithoutManifestInputObjectSchema)
            .array(),
        ])
        .optional(),
    }),
    z.object({
      connect: z
        .union([
          z.lazy(() => AnswerWhereUniqueInputObjectSchema),
          z.lazy(() => AnswerWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    }),
  ]);

export const AnswerCreateNestedManyWithoutManifestInputObjectSchema = Schema;
