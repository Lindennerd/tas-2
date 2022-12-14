import {
  assetInputSchema,
  assetEditSchema,
  AssetOutput,
} from "./../../schemas/asset.schema";
import { createRouter } from "../context/context";
import * as trpc from "@trpc/server";
import { z } from "zod";

const assetSelect = {
  id: true,
  name: true,
  description: true,
  url: true,
  createdAt: true,
  user: {
    select: {
      id: true,
      name: true,
      email: true,
    },
  },
  AssetUpdate: {
    select: {
      id: true,
      updatedAt: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  },
};

const PAGE_SIZE = 10;

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
    input: z.object({ filter: z.string(), page: z.number().default(0) }),
    async resolve({ ctx, input }) {
      return ctx.prisma.asset.findMany({
        take: PAGE_SIZE,
        skip: input.page * PAGE_SIZE,
        where: {
          name: {
            contains: input.filter,
          },
        },
        select: assetSelect,
        orderBy: { name: "asc" },
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
        select: assetSelect,
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
        select: assetSelect,
      });
    },
  })
  .mutation("createWithManifest", {
    input: assetInputSchema,
    async resolve({ ctx, input }) {
      const asset = await ctx.prisma.asset.create({
        select: assetSelect,
        data: {
          ...input,
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });

      const requiredSections = await ctx.prisma.section.findMany({
        where: { required: true },
      });

      await ctx.prisma.manifest.create({
        data: {
          asset: {
            connect: {
              id: asset.id,
            },
          },
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
          sections: {
            connect: requiredSections.map((section) => {
              return { id: section.id };
            }),
          },
        },
      });

      return asset;
    },
  })
  .mutation("edit", {
    input: assetEditSchema,
    async resolve({ ctx, input }) {
      const editted = await ctx.prisma.asset.update({
        where: { id: input.id },
        data: input,
        select: assetSelect,
      });

      await ctx.prisma.assetUpdate.create({
        data: {
          asset: { connect: { id: editted.id } },
          user: { connect: { id: ctx.session.user.id } },
        },
      });

      return editted;
    },
  });
