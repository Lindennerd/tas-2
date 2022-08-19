import { assetRouter } from "./../routers/assets.router";
import { createRouter } from "./context";
import superjson from "superjson";
import { documentRouter } from "../routers/document.router";
import { sectionsRouter } from "../routers/sections.router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("assets.", assetRouter)
  .merge("documents.", documentRouter)
  .merge("sections.", sectionsRouter);

export type AppRouter = typeof appRouter;
