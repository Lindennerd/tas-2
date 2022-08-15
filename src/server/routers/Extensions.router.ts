import { createRouter } from "./helpers/createRouter";
import { ExtensionsFindUniqueSchema } from "../../schemas/findUniqueExtensions.schema";
import { ExtensionsFindFirstSchema } from "../../schemas/findFirstExtensions.schema";
import { ExtensionsFindManySchema } from "../../schemas/findManyExtensions.schema";
import { ExtensionsCreateOneSchema } from "../../schemas/createOneExtensions.schema";
import { ExtensionsDeleteOneSchema } from "../../schemas/deleteOneExtensions.schema";
import { ExtensionsUpdateOneSchema } from "../../schemas/updateOneExtensions.schema";
import { ExtensionsDeleteManySchema } from "../../schemas/deleteManyExtensions.schema";
import { ExtensionsUpdateManySchema } from "../../schemas/updateManyExtensions.schema";
import { ExtensionsUpsertSchema } from "../../schemas/upsertOneExtensions.schema";
import { ExtensionsAggregateSchema } from "../../schemas/aggregateExtensions.schema";
import { ExtensionsGroupBySchema } from "../../schemas/groupByExtensions.schema";

export const extensionsRouter = createRouter()
  .query("aggregateExtensions", {
    input: ExtensionsAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateExtensions = await ctx.prisma.extensions.aggregate(input);
      return aggregateExtensions;
    },
  })

  .mutation("createOneExtensions", {
    input: ExtensionsCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneExtensions = await ctx.prisma.extensions.create({
        data: input.data,
      });
      return createOneExtensions;
    },
  })

  .mutation("deleteManyExtensions", {
    input: ExtensionsDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyExtensions = await ctx.prisma.extensions.deleteMany(
        input
      );
      return deleteManyExtensions;
    },
  })

  .mutation("deleteOneExtensions", {
    input: ExtensionsDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneExtensions = await ctx.prisma.extensions.delete({
        where: input.where,
      });
      return deleteOneExtensions;
    },
  })

  .query("findFirstExtensions", {
    input: ExtensionsFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstExtensions = await ctx.prisma.extensions.findFirst(input);
      return findFirstExtensions;
    },
  })

  .query("findManyExtensions", {
    input: ExtensionsFindManySchema,
    async resolve({ ctx, input }) {
      const findManyExtensions = await ctx.prisma.extensions.findMany(input);
      return findManyExtensions;
    },
  })

  .query("findUniqueExtensions", {
    input: ExtensionsFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueExtensions = await ctx.prisma.extensions.findUnique({
        where: input.where,
      });
      return findUniqueExtensions;
    },
  })

  .query("groupByExtensions", {
    input: ExtensionsGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByExtensions = await ctx.prisma.extensions.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      });
      return groupByExtensions;
    },
  })

  .mutation("updateManyExtensions", {
    input: ExtensionsUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyExtensions = await ctx.prisma.extensions.updateMany(
        input
      );
      return updateManyExtensions;
    },
  })

  .mutation("updateOneExtensions", {
    input: ExtensionsUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneExtensions = await ctx.prisma.extensions.update({
        where: input.where,
        data: input.data,
      });
      return updateOneExtensions;
    },
  })

  .mutation("upsertOneExtensions", {
    input: ExtensionsUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneExtensions = await ctx.prisma.extensions.upsert({
        where: input.where,
        create: input.create,
        update: input.update,
      });
      return upsertOneExtensions;
    },
  });
