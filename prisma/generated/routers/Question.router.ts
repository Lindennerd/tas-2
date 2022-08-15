import { createRouter } from "./helpers/createRouter";
import { QuestionFindUniqueSchema } from "../schemas/findUniqueQuestion.schema";
import { QuestionFindFirstSchema } from "../schemas/findFirstQuestion.schema";
import { QuestionFindManySchema } from "../schemas/findManyQuestion.schema";
import { QuestionCreateOneSchema } from "../schemas/createOneQuestion.schema";
import { QuestionDeleteOneSchema } from "../schemas/deleteOneQuestion.schema";
import { QuestionUpdateOneSchema } from "../schemas/updateOneQuestion.schema";
import { QuestionDeleteManySchema } from "../schemas/deleteManyQuestion.schema";
import { QuestionUpdateManySchema } from "../schemas/updateManyQuestion.schema";
import { QuestionUpsertSchema } from "../schemas/upsertOneQuestion.schema";
import { QuestionAggregateSchema } from "../schemas/aggregateQuestion.schema";
import { QuestionGroupBySchema } from "../schemas/groupByQuestion.schema";

export const questionsRouter = createRouter()

  .query("aggregateQuestion", {
    input: QuestionAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateQuestion = await ctx.prisma.question.aggregate(input);
      return aggregateQuestion;
    },
  })

  .mutation("createOneQuestion", {
    input: QuestionCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneQuestion = await ctx.prisma.question.create({ data: input.data });
      return createOneQuestion;
    },
  })

  .mutation("deleteManyQuestion", {
    input: QuestionDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyQuestion = await ctx.prisma.question.deleteMany(input);
      return deleteManyQuestion;
    },
  })

  .mutation("deleteOneQuestion", {
    input: QuestionDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneQuestion = await ctx.prisma.question.delete({ where: input.where });
      return deleteOneQuestion;
    },
  })

  .query("findFirstQuestion", {
    input: QuestionFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstQuestion = await ctx.prisma.question.findFirst(input);
      return findFirstQuestion;
    },
  })

  .query("findManyQuestion", {
    input: QuestionFindManySchema,
    async resolve({ ctx, input }) {
      const findManyQuestion = await ctx.prisma.question.findMany(input);
      return findManyQuestion;
    },
  })

  .query("findUniqueQuestion", {
    input: QuestionFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueQuestion = await ctx.prisma.question.findUnique({ where: input.where });
      return findUniqueQuestion;
    },
  })

  .query("groupByQuestion", {
    input: QuestionGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByQuestion = await ctx.prisma.question.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByQuestion;
    },
  })

  .mutation("updateManyQuestion", {
    input: QuestionUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyQuestion = await ctx.prisma.question.updateMany(input);
      return updateManyQuestion;
    },
  })

  .mutation("updateOneQuestion", {
    input: QuestionUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneQuestion = await ctx.prisma.question.update({ where: input.where, data: input.data });
      return updateOneQuestion;
    },
  })

  .mutation("upsertOneQuestion", {
    input: QuestionUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneQuestion = await ctx.prisma.question.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneQuestion;
    },
  })
