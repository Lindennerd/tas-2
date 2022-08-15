import { z } from 'zod';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';
import { ManifestCreateWithoutSectionsInputObjectSchema } from './ManifestCreateWithoutSectionsInput.schema';
import { ManifestUncheckedCreateWithoutSectionsInputObjectSchema } from './ManifestUncheckedCreateWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestCreateOrConnectWithoutSectionsInput> = z
  .object({
    where: z.lazy(() => ManifestWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ManifestCreateWithoutSectionsInputObjectSchema),
      z.lazy(() => ManifestUncheckedCreateWithoutSectionsInputObjectSchema),
    ]),
  })
  .strict();

export const ManifestCreateOrConnectWithoutSectionsInputObjectSchema = Schema;
