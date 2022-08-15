import { z } from 'zod';
import { AnswerWhereUniqueInputObjectSchema } from './AnswerWhereUniqueInput.schema';
import { AnswerCreateWithoutManifestInputObjectSchema } from './AnswerCreateWithoutManifestInput.schema';
import { AnswerUncheckedCreateWithoutManifestInputObjectSchema } from './AnswerUncheckedCreateWithoutManifestInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnswerCreateOrConnectWithoutManifestInput> = z
  .object({
    where: z.lazy(() => AnswerWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AnswerCreateWithoutManifestInputObjectSchema),
      z.lazy(() => AnswerUncheckedCreateWithoutManifestInputObjectSchema),
    ]),
  })
  .strict();

export const AnswerCreateOrConnectWithoutManifestInputObjectSchema = Schema;
