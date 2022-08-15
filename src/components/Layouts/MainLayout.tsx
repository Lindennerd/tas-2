import React from "react";
import Head from "next/head";
import { Navbar, Sidebar } from "../UI";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>TAS</title>
      </Head>
      <Navbar />
      <Sidebar />
      <main className="pt-14 pl-14">{children}</main>
    </div>
  );
}
