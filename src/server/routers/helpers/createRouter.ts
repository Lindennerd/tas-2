import * as trpc from "@trpc/server";

import { Context } from "../../context";

export function createRouter() {
  return trpc.router<Context>();
}

export function createProtectedRouter() {
  return trpc
    .router<Context>()

    .middleware(({ ctx, next }) => {
      console.log("inside middleware!");
      return next();
    });
}
