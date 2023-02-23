import { Sidebar } from "./sidebar";
import Head from "next/head";

export function Layout({ children }) {
  return (
    <div className={" bg-wet-background"}>
      <Head>
        <title>Wet Bat Dashboard</title>
      </Head>
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
