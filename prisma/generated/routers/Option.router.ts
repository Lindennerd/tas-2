import { createRouter } from "./helpers/createRouter";
import { OptionFindUniqueSchema } from "../schemas/findUniqueOption.schema";
import { OptionFindFirstSchema } from "../schemas/findFirstOption.schema";
import { OptionFindManySchema } from "../schemas/findManyOption.schema";
import { OptionCreateOneSchema } from "../schemas/createOneOption.schema";
import { OptionDeleteOneSchema } from "../schemas/deleteOneOption.schema";
import { OptionUpdateOneSchema } from "../schemas/updateOneOption.schema";
import { OptionDeleteManySchema } from "../schemas/deleteManyOption.schema";
import { OptionUpdateManySchema } from "../schemas/updateManyOption.schema";
import { OptionUpsertSchema } from "../schemas/upsertOneOption.schema";
import { OptionAggregateSchema } from "../schemas/aggregateOption.schema";
import { OptionGroupBySchema } from "../schemas/groupByOption.schema";

export const optionsRouter = createRouter()

  .query("aggregateOption", {
    input: OptionAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateOption = await ctx.prisma.option.aggregate(input);
      return aggregateOption;
    },
  })

  .mutation("createOneOption", {
    input: OptionCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneOption = await ctx.prisma.option.create({ data: input.data });
      return createOneOption;
    },
  })

  .mutation("deleteManyOption", {
    input: OptionDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyOption = await ctx.prisma.option.deleteMany(input);
      return deleteManyOption;
    },
  })

  .mutation("deleteOneOption", {
    input: OptionDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneOption = await ctx.prisma.option.delete({ where: input.where });
      return deleteOneOption;
    },
  })

  .query("findFirstOption", {
    input: OptionFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstOption = await ctx.prisma.option.findFirst(input);
      return findFirstOption;
    },
  })

  .query("findManyOption", {
    input: OptionFindManySchema,
    async resolve({ ctx, input }) {
      const findManyOption = await ctx.prisma.option.findMany(input);
      return findManyOption;
    },
  })

  .query("findUniqueOption", {
    input: OptionFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueOption = await ctx.prisma.option.findUnique({ where: input.where });
      return findUniqueOption;
    },
  })

  .query("groupByOption", {
    input: OptionGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByOption = await ctx.prisma.option.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByOption;
    },
  })

  .mutation("updateManyOption", {
    input: OptionUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyOption = await ctx.prisma.option.updateMany(input);
      return updateManyOption;
    },
  })

  .mutation("updateOneOption", {
    input: OptionUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneOption = await ctx.prisma.option.update({ where: input.where, data: input.data });
      return updateOneOption;
    },
  })

  .mutation("upsertOneOption", {
    input: OptionUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneOption = await ctx.prisma.option.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneOption;
    },
  })
