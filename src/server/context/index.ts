import { optionsRouter } from "./../routers/options.router";
import { questionsRouter } from "./../routers/questions.router";
import { assetRouter } from "./../routers/assets.router";
import { createRouter } from "./context";
import superjson from "superjson";
import { documentRouter } from "../routers/document.router";
import { sectionsRouter } from "../routers/sections.router";
import { fileExtensionsRouter } from "../routers/fileextensions.router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("assets.", assetRouter)
  .merge("documents.", documentRouter)
  .merge("sections.", sectionsRouter)
  .merge("questions.", questionsRouter)
  .merge("options.", optionsRouter)
  .merge("extensions.", fileExtensionsRouter);

export type AppRouter = typeof appRouter;
