import { z } from "zod";
import { createRouter } from "../context/context";
import * as trpc from "@trpc/server";

const selectManifest = {
  id: true,
  assetId: true,
  sections: {
    select: {
      id: true,
      name: true,
      description: true,
      questions: {
        select: {
          description: true,
          Option: {
            select: {
              description: true,
              default: true,
              id: true,
            },
          },
          Extensions: {
            select: {
              default: true,
              description: true,
              id: true,
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
      assetId: z.string().nullable(),
    }),
    async resolve({ ctx, input }) {
      if (!input.assetId) return undefined;
      return await ctx.prisma.manifest.findFirst({
        where: { assetId: input.assetId },
        select: selectManifest,
      });
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
  });
