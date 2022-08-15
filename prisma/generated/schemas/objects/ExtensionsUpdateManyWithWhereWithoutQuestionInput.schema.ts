import { z } from 'zod';
import { ExtensionsScalarWhereInputObjectSchema } from './ExtensionsScalarWhereInput.schema';
import { ExtensionsUpdateManyMutationInputObjectSchema } from './ExtensionsUpdateManyMutationInput.schema';
import { ExtensionsUncheckedUpdateManyWithoutExtensionsInputObjectSchema } from './ExtensionsUncheckedUpdateManyWithoutExtensionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExtensionsUpdateManyWithWhereWithoutQuestionInput> =
  z
    .object({
      where: z.lazy(() => ExtensionsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ExtensionsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ExtensionsUncheckedUpdateManyWithoutExtensionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ExtensionsUpdateManyWithWhereWithoutQuestionInputObjectSchema =
  Schema;
