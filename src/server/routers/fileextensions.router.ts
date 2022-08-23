import {
  extensionInputSchema,
  extensionUpdateSchema,
} from "./../../schemas/extension.schema";
import { createRouter } from "../context/context";
import { z } from "zod";

export const fileExtensionsRouter = createRouter()
  .mutation("create", {
    input: extensionInputSchema,
    async resolve({ ctx, input }) {
      return await ctx.prisma.extensions.create({
        data: input,
      });
    },
  })
  .mutation("update", {
    input: extensionUpdateSchema,
    async resolve({ ctx, input }) {
      return await ctx.prisma.extensions.update({
        where: { id: input.id },
        data: input,
      });
    },
  })
  .query("findFirst", {
    input: z.string(),
    async resolve({ ctx, input }) {
      return await ctx.prisma.extensions.findFirst({
        where: { id: input },
      });
    },
  });
