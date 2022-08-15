// src/pages/api/trpc/[trpc].ts
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "../../../server/context";
import { createContext } from "../../../server/context/context";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});
