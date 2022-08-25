import { z } from "zod";
import { createRouter } from "../context/context";
import * as trpc from "@trpc/server";

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
      });
    },
  });
