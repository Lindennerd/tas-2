import { assetRouter } from "./../routers/assets.router";
import { createRouter } from "./context";
import superjson from "superjson";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("assets.", assetRouter);

export type AppRouter = typeof appRouter;
