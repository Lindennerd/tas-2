import { z } from 'zod';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';
import { ManifestCreateWithoutUserInputObjectSchema } from './ManifestCreateWithoutUserInput.schema';
import { ManifestUncheckedCreateWithoutUserInputObjectSchema } from './ManifestUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => ManifestWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ManifestCreateWithoutUserInputObjectSchema),
      z.lazy(() => ManifestUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const ManifestCreateOrConnectWithoutUserInputObjectSchema = Schema;
