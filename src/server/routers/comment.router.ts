import z from "zod";
import { createRouter } from "../context/context";
export const commentRouter = createRouter().query("findFirst", {
  input: z.string(),
  async resolve({ ctx, input }) {
    return ctx.prisma.comment.findFirst({
      where: { id: input },
    });
  },
});
