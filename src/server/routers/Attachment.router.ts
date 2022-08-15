import { createRouter } from "./helpers/createRouter";
import { AttachmentFindUniqueSchema } from "../../schemas/findUniqueAttachment.schema";
import { AttachmentFindFirstSchema } from "../../schemas/findFirstAttachment.schema";
import { AttachmentFindManySchema } from "../../schemas/findManyAttachment.schema";
import { AttachmentCreateOneSchema } from "../../schemas/createOneAttachment.schema";
import { AttachmentDeleteOneSchema } from "../../schemas/deleteOneAttachment.schema";
import { AttachmentUpdateOneSchema } from "../../schemas/updateOneAttachment.schema";
import { AttachmentDeleteManySchema } from "../../schemas/deleteManyAttachment.schema";
import { AttachmentUpdateManySchema } from "../../schemas/updateManyAttachment.schema";
import { AttachmentUpsertSchema } from "../../schemas/upsertOneAttachment.schema";
import { AttachmentAggregateSchema } from "../../schemas/aggregateAttachment.schema";
import { AttachmentGroupBySchema } from "../../schemas/groupByAttachment.schema";

export const attachmentsRouter = createRouter()
  .query("aggregateAttachment", {
    input: AttachmentAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateAttachment = await ctx.prisma.attachment.aggregate(input);
      return aggregateAttachment;
    },
  })

  .mutation("createOneAttachment", {
    input: AttachmentCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneAttachment = await ctx.prisma.attachment.create({
        data: input.data,
      });
      return createOneAttachment;
    },
  })

  .mutation("deleteManyAttachment", {
    input: AttachmentDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyAttachment = await ctx.prisma.attachment.deleteMany(
        input
      );
      return deleteManyAttachment;
    },
  })

  .mutation("deleteOneAttachment", {
    input: AttachmentDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneAttachment = await ctx.prisma.attachment.delete({
        where: input.where,
      });
      return deleteOneAttachment;
    },
  })

  .query("findFirstAttachment", {
    input: AttachmentFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstAttachment = await ctx.prisma.attachment.findFirst(input);
      return findFirstAttachment;
    },
  })

  .query("findManyAttachment", {
    input: AttachmentFindManySchema,
    async resolve({ ctx, input }) {
      const findManyAttachment = await ctx.prisma.attachment.findMany(input);
      return findManyAttachment;
    },
  })

  .query("findUniqueAttachment", {
    input: AttachmentFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueAttachment = await ctx.prisma.attachment.findUnique({
        where: input.where,
      });
      return findUniqueAttachment;
    },
  })

  .query("groupByAttachment", {
    input: AttachmentGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByAttachment = await ctx.prisma.attachment.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      });
      return groupByAttachment;
    },
  })

  .mutation("updateManyAttachment", {
    input: AttachmentUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyAttachment = await ctx.prisma.attachment.updateMany(
        input
      );
      return updateManyAttachment;
    },
  })

  .mutation("updateOneAttachment", {
    input: AttachmentUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneAttachment = await ctx.prisma.attachment.update({
        where: input.where,
        data: input.data,
      });
      return updateOneAttachment;
    },
  })

  .mutation("upsertOneAttachment", {
    input: AttachmentUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneAttachment = await ctx.prisma.attachment.upsert({
        where: input.where,
        create: input.create,
        update: input.update,
      });
      return upsertOneAttachment;
    },
  });
