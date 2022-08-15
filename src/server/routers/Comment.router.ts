import { createRouter } from "./helpers/createRouter";
import { CommentFindUniqueSchema } from "../../schemas/findUniqueComment.schema";
import { CommentFindFirstSchema } from "../../schemas/findFirstComment.schema";
import { CommentFindManySchema } from "../../schemas/findManyComment.schema";
import { CommentCreateOneSchema } from "../../schemas/createOneComment.schema";
import { CommentDeleteOneSchema } from "../../schemas/deleteOneComment.schema";
import { CommentUpdateOneSchema } from "../../schemas/updateOneComment.schema";
import { CommentDeleteManySchema } from "../../schemas/deleteManyComment.schema";
import { CommentUpdateManySchema } from "../../schemas/updateManyComment.schema";
import { CommentUpsertSchema } from "../../schemas/upsertOneComment.schema";
import { CommentAggregateSchema } from "../../schemas/aggregateComment.schema";
import { CommentGroupBySchema } from "../../schemas/groupByComment.schema";

export const commentsRouter = createRouter()
  .query("aggregateComment", {
    input: CommentAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateComment = await ctx.prisma.comment.aggregate(input);
      return aggregateComment;
    },
  })

  .mutation("createOneComment", {
    input: CommentCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneComment = await ctx.prisma.comment.create({
        data: input.data,
      });
      return createOneComment;
    },
  })

  .mutation("deleteManyComment", {
    input: CommentDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyComment = await ctx.prisma.comment.deleteMany(input);
      return deleteManyComment;
    },
  })

  .mutation("deleteOneComment", {
    input: CommentDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneComment = await ctx.prisma.comment.delete({
        where: input.where,
      });
      return deleteOneComment;
    },
  })

  .query("findFirstComment", {
    input: CommentFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstComment = await ctx.prisma.comment.findFirst(input);
      return findFirstComment;
    },
  })

  .query("findManyComment", {
    input: CommentFindManySchema,
    async resolve({ ctx, input }) {
      const findManyComment = await ctx.prisma.comment.findMany(input);
      return findManyComment;
    },
  })

  .query("findUniqueComment", {
    input: CommentFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueComment = await ctx.prisma.comment.findUnique({
        where: input.where,
      });
      return findUniqueComment;
    },
  })

  .query("groupByComment", {
    input: CommentGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByComment = await ctx.prisma.comment.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      });
      return groupByComment;
    },
  })

  .mutation("updateManyComment", {
    input: CommentUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyComment = await ctx.prisma.comment.updateMany(input);
      return updateManyComment;
    },
  })

  .mutation("updateOneComment", {
    input: CommentUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneComment = await ctx.prisma.comment.update({
        where: input.where,
        data: input.data,
      });
      return updateOneComment;
    },
  })

  .mutation("upsertOneComment", {
    input: CommentUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneComment = await ctx.prisma.comment.upsert({
        where: input.where,
        create: input.create,
        update: input.update,
      });
      return upsertOneComment;
    },
  });
