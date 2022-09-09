import { Answer } from "@/schemas/answer.schema";
import { z } from "zod";
import { createRouter } from "../context/context";
import * as trpc from "@trpc/server";

const selectManifest = {
  id: true,
  Comment: true,
  asset: {
    select: {
      id: true,
      name: true,
      createdAt: true,
    },
  },
  sections: {
    select: {
      id: true,
      name: true,
      description: true,
      required: true,
      questions: {
        select: {
          id: true,
          description: true,
          type: true,
          weight: true,
          help: true,
          sectionId: true,
          Answer: {
            select: {
              id: true,
              questionId: true,
              value: true,
            },
          },
          Option: {
            select: {
              id: true,
              default: true,
              description: true,
              questionId: true,
            },
          },
          Extensions: {
            select: {
              id: true,
              default: true,
              description: true,
              questionId: true,
            },
          },
        },
      },
    },
  },
};

export const manifestRouter = createRouter()
  .middleware(({ ctx, next }) => {
    if (!ctx.session || !ctx.session.user) {
      throw new trpc.TRPCError({ code: "UNAUTHORIZED" });
    }
    return next({
      ctx: {
        ...ctx,
        session: { ...ctx.session, user: ctx.session.user },
      },
    });
  })
  .query("findByAsset", {
    input: z.object({
      assetId: z.string(),
    }),
    async resolve({ ctx, input }) {
      let manifest = await ctx.prisma.manifest.findFirst({
        where: { assetId: input.assetId },
        select: selectManifest,
      });

      if (!manifest) {
        manifest = await ctx.prisma.manifest.create({
          data: { assetId: input.assetId, userId: ctx.session.user.id },
          select: selectManifest,
        });
      }

      return manifest;
    },
  })
  .query("findFirst", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.prisma.manifest.findFirst({
        where: { id: input },
        select: selectManifest,
      });
    },
  })
  .mutation("addSection", {
    input: z.object({
      sectionId: z.string(),
      manifestId: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.manifest.update({
        where: { id: input.manifestId },
        data: {
          sections: {
            connect: { id: input.sectionId },
          },
        },
      });
    },
  });
