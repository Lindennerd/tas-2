// src/pages/api/trpc/[trpc].ts
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "../../../server/context";
import { createContext } from "../../../server/context/context";
import pino from "pino";

const logger = pino();

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
  onError: (error) => {
    logger.error(error);
  },
});
