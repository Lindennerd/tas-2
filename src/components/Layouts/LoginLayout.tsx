import React from "react";
import Head from "next/head";

export function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>TAS</title>
      </Head>

      <main className="pt-14 pl-14">{children}</main>
    </div>
  );
}
