import { createRouter } from "./helpers/createRouter";
import { ManifestUpdateFindUniqueSchema } from "../../schemas/findUniqueManifestUpdate.schema";
import { ManifestUpdateFindFirstSchema } from "../../schemas/findFirstManifestUpdate.schema";
import { ManifestUpdateFindManySchema } from "../../schemas/findManyManifestUpdate.schema";
import { ManifestUpdateCreateOneSchema } from "../../schemas/createOneManifestUpdate.schema";
import { ManifestUpdateDeleteOneSchema } from "../../schemas/deleteOneManifestUpdate.schema";
import { ManifestUpdateUpdateOneSchema } from "../../schemas/updateOneManifestUpdate.schema";
import { ManifestUpdateDeleteManySchema } from "../../schemas/deleteManyManifestUpdate.schema";
import { ManifestUpdateUpdateManySchema } from "../../schemas/updateManyManifestUpdate.schema";
import { ManifestUpdateUpsertSchema } from "../../schemas/upsertOneManifestUpdate.schema";
import { ManifestUpdateAggregateSchema } from "../../schemas/aggregateManifestUpdate.schema";
import { ManifestUpdateGroupBySchema } from "../../schemas/groupByManifestUpdate.schema";

export const manifestupdatesRouter = createRouter()
  .query("aggregateManifestUpdate", {
    input: ManifestUpdateAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateManifestUpdate = await ctx.prisma.manifestUpdate.aggregate(
        input
      );
      return aggregateManifestUpdate;
    },
  })

  .mutation("createOneManifestUpdate", {
    input: ManifestUpdateCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneManifestUpdate = await ctx.prisma.manifestUpdate.create({
        data: input.data,
      });
      return createOneManifestUpdate;
    },
  })

  .mutation("deleteManyManifestUpdate", {
    input: ManifestUpdateDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyManifestUpdate =
        await ctx.prisma.manifestUpdate.deleteMany(input);
      return deleteManyManifestUpdate;
    },
  })

  .mutation("deleteOneManifestUpdate", {
    input: ManifestUpdateDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneManifestUpdate = await ctx.prisma.manifestUpdate.delete({
        where: input.where,
      });
      return deleteOneManifestUpdate;
    },
  })

  .query("findFirstManifestUpdate", {
    input: ManifestUpdateFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstManifestUpdate = await ctx.prisma.manifestUpdate.findFirst(
        input
      );
      return findFirstManifestUpdate;
    },
  })

  .query("findManyManifestUpdate", {
    input: ManifestUpdateFindManySchema,
    async resolve({ ctx, input }) {
      const findManyManifestUpdate = await ctx.prisma.manifestUpdate.findMany(
        input
      );
      return findManyManifestUpdate;
    },
  })

  .query("findUniqueManifestUpdate", {
    input: ManifestUpdateFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueManifestUpdate =
        await ctx.prisma.manifestUpdate.findUnique({ where: input.where });
      return findUniqueManifestUpdate;
    },
  })

  .query("groupByManifestUpdate", {
    input: ManifestUpdateGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByManifestUpdate = await ctx.prisma.manifestUpdate.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      });
      return groupByManifestUpdate;
    },
  })

  .mutation("updateManyManifestUpdate", {
    input: ManifestUpdateUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyManifestUpdate =
        await ctx.prisma.manifestUpdate.updateMany(input);
      return updateManyManifestUpdate;
    },
  })

  .mutation("updateOneManifestUpdate", {
    input: ManifestUpdateUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneManifestUpdate = await ctx.prisma.manifestUpdate.update({
        where: input.where,
        data: input.data,
      });
      return updateOneManifestUpdate;
    },
  })

  .mutation("upsertOneManifestUpdate", {
    input: ManifestUpdateUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneManifestUpdate = await ctx.prisma.manifestUpdate.upsert({
        where: input.where,
        create: input.create,
        update: input.update,
      });
      return upsertOneManifestUpdate;
    },
  });
