import { createRouter } from "./helpers/createRouter";
import { AnswerFindUniqueSchema } from "../schemas/findUniqueAnswer.schema";
import { AnswerFindFirstSchema } from "../schemas/findFirstAnswer.schema";
import { AnswerFindManySchema } from "../schemas/findManyAnswer.schema";
import { AnswerCreateOneSchema } from "../schemas/createOneAnswer.schema";
import { AnswerDeleteOneSchema } from "../schemas/deleteOneAnswer.schema";
import { AnswerUpdateOneSchema } from "../schemas/updateOneAnswer.schema";
import { AnswerDeleteManySchema } from "../schemas/deleteManyAnswer.schema";
import { AnswerUpdateManySchema } from "../schemas/updateManyAnswer.schema";
import { AnswerUpsertSchema } from "../schemas/upsertOneAnswer.schema";
import { AnswerAggregateSchema } from "../schemas/aggregateAnswer.schema";
import { AnswerGroupBySchema } from "../schemas/groupByAnswer.schema";

export const answersRouter = createRouter()

  .query("aggregateAnswer", {
    input: AnswerAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateAnswer = await ctx.prisma.answer.aggregate(input);
      return aggregateAnswer;
    },
  })

  .mutation("createOneAnswer", {
    input: AnswerCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneAnswer = await ctx.prisma.answer.create({ data: input.data });
      return createOneAnswer;
    },
  })

  .mutation("deleteManyAnswer", {
    input: AnswerDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyAnswer = await ctx.prisma.answer.deleteMany(input);
      return deleteManyAnswer;
    },
  })

  .mutation("deleteOneAnswer", {
    input: AnswerDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneAnswer = await ctx.prisma.answer.delete({ where: input.where });
      return deleteOneAnswer;
    },
  })

  .query("findFirstAnswer", {
    input: AnswerFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstAnswer = await ctx.prisma.answer.findFirst(input);
      return findFirstAnswer;
    },
  })

  .query("findManyAnswer", {
    input: AnswerFindManySchema,
    async resolve({ ctx, input }) {
      const findManyAnswer = await ctx.prisma.answer.findMany(input);
      return findManyAnswer;
    },
  })

  .query("findUniqueAnswer", {
    input: AnswerFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueAnswer = await ctx.prisma.answer.findUnique({ where: input.where });
      return findUniqueAnswer;
    },
  })

  .query("groupByAnswer", {
    input: AnswerGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByAnswer = await ctx.prisma.answer.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByAnswer;
    },
  })

  .mutation("updateManyAnswer", {
    input: AnswerUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyAnswer = await ctx.prisma.answer.updateMany(input);
      return updateManyAnswer;
    },
  })

  .mutation("updateOneAnswer", {
    input: AnswerUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneAnswer = await ctx.prisma.answer.update({ where: input.where, data: input.data });
      return updateOneAnswer;
    },
  })

  .mutation("upsertOneAnswer", {
    input: AnswerUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneAnswer = await ctx.prisma.answer.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneAnswer;
    },
  })
