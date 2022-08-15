import { createRouter } from "./helpers/createRouter";
import { ManifestFindUniqueSchema } from "../schemas/findUniqueManifest.schema";
import { ManifestFindFirstSchema } from "../schemas/findFirstManifest.schema";
import { ManifestFindManySchema } from "../schemas/findManyManifest.schema";
import { ManifestCreateOneSchema } from "../schemas/createOneManifest.schema";
import { ManifestDeleteOneSchema } from "../schemas/deleteOneManifest.schema";
import { ManifestUpdateOneSchema } from "../schemas/updateOneManifest.schema";
import { ManifestDeleteManySchema } from "../schemas/deleteManyManifest.schema";
import { ManifestUpdateManySchema } from "../schemas/updateManyManifest.schema";
import { ManifestUpsertSchema } from "../schemas/upsertOneManifest.schema";
import { ManifestAggregateSchema } from "../schemas/aggregateManifest.schema";
import { ManifestGroupBySchema } from "../schemas/groupByManifest.schema";

export const manifestsRouter = createRouter()

  .query("aggregateManifest", {
    input: ManifestAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateManifest = await ctx.prisma.manifest.aggregate(input);
      return aggregateManifest;
    },
  })

  .mutation("createOneManifest", {
    input: ManifestCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneManifest = await ctx.prisma.manifest.create({ data: input.data });
      return createOneManifest;
    },
  })

  .mutation("deleteManyManifest", {
    input: ManifestDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyManifest = await ctx.prisma.manifest.deleteMany(input);
      return deleteManyManifest;
    },
  })

  .mutation("deleteOneManifest", {
    input: ManifestDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneManifest = await ctx.prisma.manifest.delete({ where: input.where });
      return deleteOneManifest;
    },
  })

  .query("findFirstManifest", {
    input: ManifestFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstManifest = await ctx.prisma.manifest.findFirst(input);
      return findFirstManifest;
    },
  })

  .query("findManyManifest", {
    input: ManifestFindManySchema,
    async resolve({ ctx, input }) {
      const findManyManifest = await ctx.prisma.manifest.findMany(input);
      return findManyManifest;
    },
  })

  .query("findUniqueManifest", {
    input: ManifestFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueManifest = await ctx.prisma.manifest.findUnique({ where: input.where });
      return findUniqueManifest;
    },
  })

  .query("groupByManifest", {
    input: ManifestGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByManifest = await ctx.prisma.manifest.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByManifest;
    },
  })

  .mutation("updateManyManifest", {
    input: ManifestUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyManifest = await ctx.prisma.manifest.updateMany(input);
      return updateManyManifest;
    },
  })

  .mutation("updateOneManifest", {
    input: ManifestUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneManifest = await ctx.prisma.manifest.update({ where: input.where, data: input.data });
      return updateOneManifest;
    },
  })

  .mutation("upsertOneManifest", {
    input: ManifestUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneManifest = await ctx.prisma.manifest.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneManifest;
    },
  })
