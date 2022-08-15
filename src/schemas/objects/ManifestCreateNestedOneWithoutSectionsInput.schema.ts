import { z } from 'zod';
import { ManifestCreateWithoutSectionsInputObjectSchema } from './ManifestCreateWithoutSectionsInput.schema';
import { ManifestUncheckedCreateWithoutSectionsInputObjectSchema } from './ManifestUncheckedCreateWithoutSectionsInput.schema';
import { ManifestCreateOrConnectWithoutSectionsInputObjectSchema } from './ManifestCreateOrConnectWithoutSectionsInput.schema';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestCreateNestedOneWithoutSectionsInput> =
  z.union([
    z.object({
      create: z
        .union([
          z.lazy(() => ManifestCreateWithoutSectionsInputObjectSchema),
          z.lazy(() => ManifestUncheckedCreateWithoutSectionsInputObjectSchema),
        ])
        .optional(),
    }),
    z.object({
      connectOrCreate: z
        .lazy(() => ManifestCreateOrConnectWithoutSectionsInputObjectSchema)
        .optional(),
    }),
    z.object({
      connect: z.lazy(() => ManifestWhereUniqueInputObjectSchema).optional(),
    }),
  ]);

export const ManifestCreateNestedOneWithoutSectionsInputObjectSchema = Schema;
