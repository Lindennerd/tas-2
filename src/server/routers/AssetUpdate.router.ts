import { createRouter } from "./helpers/createRouter";
import { AssetUpdateFindUniqueSchema } from "../../schemas/findUniqueAssetUpdate.schema";
import { AssetUpdateFindFirstSchema } from "../../schemas/findFirstAssetUpdate.schema";
import { AssetUpdateFindManySchema } from "../../schemas/findManyAssetUpdate.schema";
import { AssetUpdateCreateOneSchema } from "../../schemas/createOneAssetUpdate.schema";
import { AssetUpdateDeleteOneSchema } from "../../schemas/deleteOneAssetUpdate.schema";
import { AssetUpdateUpdateOneSchema } from "../../schemas/updateOneAssetUpdate.schema";
import { AssetUpdateDeleteManySchema } from "../../schemas/deleteManyAssetUpdate.schema";
import { AssetUpdateUpdateManySchema } from "../../schemas/updateManyAssetUpdate.schema";
import { AssetUpdateUpsertSchema } from "../../schemas/upsertOneAssetUpdate.schema";
import { AssetUpdateAggregateSchema } from "../../schemas/aggregateAssetUpdate.schema";
import { AssetUpdateGroupBySchema } from "../../schemas/groupByAssetUpdate.schema";

export const assetupdatesRouter = createRouter()
  .query("aggregateAssetUpdate", {
    input: AssetUpdateAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateAssetUpdate = await ctx.prisma.assetUpdate.aggregate(
        input
      );
      return aggregateAssetUpdate;
    },
  })

  .mutation("createOneAssetUpdate", {
    input: AssetUpdateCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneAssetUpdate = await ctx.prisma.assetUpdate.create({
        data: input.data,
      });
      return createOneAssetUpdate;
    },
  })

  .mutation("deleteManyAssetUpdate", {
    input: AssetUpdateDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyAssetUpdate = await ctx.prisma.assetUpdate.deleteMany(
        input
      );
      return deleteManyAssetUpdate;
    },
  })

  .mutation("deleteOneAssetUpdate", {
    input: AssetUpdateDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneAssetUpdate = await ctx.prisma.assetUpdate.delete({
        where: input.where,
      });
      return deleteOneAssetUpdate;
    },
  })

  .query("findFirstAssetUpdate", {
    input: AssetUpdateFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstAssetUpdate = await ctx.prisma.assetUpdate.findFirst(
        input
      );
      return findFirstAssetUpdate;
    },
  })

  .query("findManyAssetUpdate", {
    input: AssetUpdateFindManySchema,
    async resolve({ ctx, input }) {
      const findManyAssetUpdate = await ctx.prisma.assetUpdate.findMany(input);
      return findManyAssetUpdate;
    },
  })

  .query("findUniqueAssetUpdate", {
    input: AssetUpdateFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueAssetUpdate = await ctx.prisma.assetUpdate.findUnique({
        where: input.where,
      });
      return findUniqueAssetUpdate;
    },
  })

  .query("groupByAssetUpdate", {
    input: AssetUpdateGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByAssetUpdate = await ctx.prisma.assetUpdate.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      });
      return groupByAssetUpdate;
    },
  })

  .mutation("updateManyAssetUpdate", {
    input: AssetUpdateUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyAssetUpdate = await ctx.prisma.assetUpdate.updateMany(
        input
      );
      return updateManyAssetUpdate;
    },
  })

  .mutation("updateOneAssetUpdate", {
    input: AssetUpdateUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneAssetUpdate = await ctx.prisma.assetUpdate.update({
        where: input.where,
        data: input.data,
      });
      return updateOneAssetUpdate;
    },
  })

  .mutation("upsertOneAssetUpdate", {
    input: AssetUpdateUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneAssetUpdate = await ctx.prisma.assetUpdate.upsert({
        where: input.where,
        create: input.create,
        update: input.update,
      });
      return upsertOneAssetUpdate;
    },
  });
