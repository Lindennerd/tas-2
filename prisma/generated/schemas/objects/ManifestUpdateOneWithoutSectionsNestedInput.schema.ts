import { z } from 'zod';
import { ManifestCreateWithoutSectionsInputObjectSchema } from './ManifestCreateWithoutSectionsInput.schema';
import { ManifestUncheckedCreateWithoutSectionsInputObjectSchema } from './ManifestUncheckedCreateWithoutSectionsInput.schema';
import { ManifestCreateOrConnectWithoutSectionsInputObjectSchema } from './ManifestCreateOrConnectWithoutSectionsInput.schema';
import { ManifestUpsertWithoutSectionsInputObjectSchema } from './ManifestUpsertWithoutSectionsInput.schema';
import { ManifestWhereUniqueInputObjectSchema } from './ManifestWhereUniqueInput.schema';
import { ManifestUpdateWithoutSectionsInputObjectSchema } from './ManifestUpdateWithoutSectionsInput.schema';
import { ManifestUncheckedUpdateWithoutSectionsInputObjectSchema } from './ManifestUncheckedUpdateWithoutSectionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ManifestUpdateOneWithoutSectionsNestedInput> =
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
      upsert: z
        .lazy(() => ManifestUpsertWithoutSectionsInputObjectSchema)
        .optional(),
    }),
    z.object({
      disconnect: z.boolean().optional(),
    }),
    z.object({
      delete: z.boolean().optional(),
    }),
    z.object({
      connect: z.lazy(() => ManifestWhereUniqueInputObjectSchema).optional(),
    }),
    z.object({
      update: z
        .union([
          z.lazy(() => ManifestUpdateWithoutSectionsInputObjectSchema),
          z.lazy(() => ManifestUncheckedUpdateWithoutSectionsInputObjectSchema),
        ])
        .optional(),
    }),
  ]);

export const ManifestUpdateOneWithoutSectionsNestedInputObjectSchema = Schema;
