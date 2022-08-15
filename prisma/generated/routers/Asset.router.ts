import { createRouter } from "./helpers/createRouter";
import { AssetFindUniqueSchema } from "../schemas/findUniqueAsset.schema";
import { AssetFindFirstSchema } from "../schemas/findFirstAsset.schema";
import { AssetFindManySchema } from "../schemas/findManyAsset.schema";
import { AssetCreateOneSchema } from "../schemas/createOneAsset.schema";
import { AssetDeleteOneSchema } from "../schemas/deleteOneAsset.schema";
import { AssetUpdateOneSchema } from "../schemas/updateOneAsset.schema";
import { AssetDeleteManySchema } from "../schemas/deleteManyAsset.schema";
import { AssetUpdateManySchema } from "../schemas/updateManyAsset.schema";
import { AssetUpsertSchema } from "../schemas/upsertOneAsset.schema";
import { AssetAggregateSchema } from "../schemas/aggregateAsset.schema";
import { AssetGroupBySchema } from "../schemas/groupByAsset.schema";

export const assetsRouter = createRouter()

  .query("aggregateAsset", {
    input: AssetAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateAsset = await ctx.prisma.asset.aggregate(input);
      return aggregateAsset;
    },
  })

  .mutation("createOneAsset", {
    input: AssetCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneAsset = await ctx.prisma.asset.create({ data: input.data });
      return createOneAsset;
    },
  })

  .mutation("deleteManyAsset", {
    input: AssetDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyAsset = await ctx.prisma.asset.deleteMany(input);
      return deleteManyAsset;
    },
  })

  .mutation("deleteOneAsset", {
    input: AssetDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneAsset = await ctx.prisma.asset.delete({ where: input.where });
      return deleteOneAsset;
    },
  })

  .query("findFirstAsset", {
    input: AssetFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstAsset = await ctx.prisma.asset.findFirst(input);
      return findFirstAsset;
    },
  })

  .query("findManyAsset", {
    input: AssetFindManySchema,
    async resolve({ ctx, input }) {
      const findManyAsset = await ctx.prisma.asset.findMany(input);
      return findManyAsset;
    },
  })

  .query("findUniqueAsset", {
    input: AssetFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueAsset = await ctx.prisma.asset.findUnique({ where: input.where });
      return findUniqueAsset;
    },
  })

  .query("groupByAsset", {
    input: AssetGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByAsset = await ctx.prisma.asset.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByAsset;
    },
  })

  .mutation("updateManyAsset", {
    input: AssetUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyAsset = await ctx.prisma.asset.updateMany(input);
      return updateManyAsset;
    },
  })

  .mutation("updateOneAsset", {
    input: AssetUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneAsset = await ctx.prisma.asset.update({ where: input.where, data: input.data });
      return updateOneAsset;
    },
  })

  .mutation("upsertOneAsset", {
    input: AssetUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneAsset = await ctx.prisma.asset.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneAsset;
    },
  })
