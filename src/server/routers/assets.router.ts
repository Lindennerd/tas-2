import { assetInputSchema } from "./../../schemas/asset.schema";
import { createRouter } from "../context/context";
import * as trpc from "@trpc/server";
import { z } from "zod";

export const assetRouter = createRouter()
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
  .query("findMany", {
    input: z.object({ filter: z.string() }),
    async resolve({ ctx, input }) {
      return ctx.prisma.asset.findMany({
        where: {
          name: {
            contains: input.filter,
          },
        },
      });
    },
  })
  .query("findFirst", {
    input: z.object({ id: z.string() }),
    async resolve({ ctx, input }) {
      return ctx.prisma.asset.findFirst({
        where: {
          id: input.id,
        },
      });
    },
  })
  .mutation("create", {
    input: assetInputSchema,
    async resolve({ ctx, input }) {
      return ctx.prisma.asset.create({
        data: {
          ...input,
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    },
  });
