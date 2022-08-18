import { assetRouter } from "./../routers/assets.router";
import { createRouter } from "./context";
import superjson from "superjson";
import { documentRouter } from "../routers/document.router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("assets.", assetRouter)
  .merge("documents.", documentRouter);

export type AppRouter = typeof appRouter;
