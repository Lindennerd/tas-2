import "../styles/globals.css";
import { AppProps } from "next/app";

import { withTRPC } from "@trpc/next";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import type { AppRouter } from "../server/context/";
import type { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";
import { SessionProvider } from "next-auth/react";
import { AuthContextProvider } from "../context/auth.context";
import { ThemeProvider } from "@material-tailwind/react";
import kpmgTheme from "../theme/kpmg-theme";
import { MainLayout } from "../components/Layouts";

import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

import { ThemeProvider } from "@material-tailwind/react";
import theme from "../theme/kpmg-theme";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType = (({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <SessionProvider session={session}>
        <AuthContextProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </AuthContextProvider>
      </SessionProvider>
    ));

  return getLayout(<Component {...pageProps} />);
}) as AppType;

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

const url = `${getBaseUrl()}/api/trpc`;

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const links = [
      loggerLink(),
      httpBatchLink({
        maxBatchSize: 10,
        url,
      }),
    ];
    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 60,
          },
        },
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            "x-ssr": "1",
          };
        }
        return {};
      },
      links,
      transformer: superjson,
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
