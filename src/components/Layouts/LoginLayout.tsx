import React from "react";
import Head from "next/head";

export function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>TAS</title>
      </Head>
      <main className="flex justify-center items-center">{children}</main>
    </div>
  );
}
