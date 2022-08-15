import { createRouter } from "./helpers/createRouter";
import { SectionFindUniqueSchema } from "../schemas/findUniqueSection.schema";
import { SectionFindFirstSchema } from "../schemas/findFirstSection.schema";
import { SectionFindManySchema } from "../schemas/findManySection.schema";
import { SectionCreateOneSchema } from "../schemas/createOneSection.schema";
import { SectionDeleteOneSchema } from "../schemas/deleteOneSection.schema";
import { SectionUpdateOneSchema } from "../schemas/updateOneSection.schema";
import { SectionDeleteManySchema } from "../schemas/deleteManySection.schema";
import { SectionUpdateManySchema } from "../schemas/updateManySection.schema";
import { SectionUpsertSchema } from "../schemas/upsertOneSection.schema";
import { SectionAggregateSchema } from "../schemas/aggregateSection.schema";
import { SectionGroupBySchema } from "../schemas/groupBySection.schema";

export const sectionsRouter = createRouter()

  .query("aggregateSection", {
    input: SectionAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateSection = await ctx.prisma.section.aggregate(input);
      return aggregateSection;
    },
  })

  .mutation("createOneSection", {
    input: SectionCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneSection = await ctx.prisma.section.create({ data: input.data });
      return createOneSection;
    },
  })

  .mutation("deleteManySection", {
    input: SectionDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManySection = await ctx.prisma.section.deleteMany(input);
      return deleteManySection;
    },
  })

  .mutation("deleteOneSection", {
    input: SectionDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneSection = await ctx.prisma.section.delete({ where: input.where });
      return deleteOneSection;
    },
  })

  .query("findFirstSection", {
    input: SectionFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstSection = await ctx.prisma.section.findFirst(input);
      return findFirstSection;
    },
  })

  .query("findManySection", {
    input: SectionFindManySchema,
    async resolve({ ctx, input }) {
      const findManySection = await ctx.prisma.section.findMany(input);
      return findManySection;
    },
  })

  .query("findUniqueSection", {
    input: SectionFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueSection = await ctx.prisma.section.findUnique({ where: input.where });
      return findUniqueSection;
    },
  })

  .query("groupBySection", {
    input: SectionGroupBySchema,
    async resolve({ ctx, input }) {
      const groupBySection = await ctx.prisma.section.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBySection;
    },
  })

  .mutation("updateManySection", {
    input: SectionUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManySection = await ctx.prisma.section.updateMany(input);
      return updateManySection;
    },
  })

  .mutation("updateOneSection", {
    input: SectionUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneSection = await ctx.prisma.section.update({ where: input.where, data: input.data });
      return updateOneSection;
    },
  })

  .mutation("upsertOneSection", {
    input: SectionUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneSection = await ctx.prisma.section.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneSection;
    },
  })
