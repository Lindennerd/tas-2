import { z } from 'zod';
import { ManifestUpdateWithoutSectionsInputObjectSchema } from './ManifestUpdateWithoutSectionsInput.schema';
import { ManifestUncheckedUpdateWithoutSectionsInputObjectSchema } from './ManifestUncheckedUpdateWithoutSectionsInput.schema';
import { ManifestCreateWithoutSectionsInputObjectSchema } from './ManifestCreateWithoutSectionsInput.schema';
import { ManifestUncheckedCreateWithoutSectionsInputObjectSchema } from './ManifestUncheckedCreateWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpsertWithoutSectionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ManifestUpdateWithoutSectionsInputObjectSchema),
      z.lazy(() => ManifestUncheckedUpdateWithoutSectionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ManifestCreateWithoutSectionsInputObjectSchema),
      z.lazy(() => ManifestUncheckedCreateWithoutSectionsInputObjectSchema),
    ]),
  })
  .strict();

export const ManifestUpsertWithoutSectionsInputObjectSchema = Schema;
