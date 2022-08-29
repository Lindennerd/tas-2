import { z } from "zod";
import { createRouter } from "./../context/context";
export const answersRouter = createRouter().query("findFirst", {
  input: z.string(),
  async resolve({ ctx, input }) {
    return await ctx.prisma.answer.findFirst({
      where: { id: input },
    });
  },
});
