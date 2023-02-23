import Head from "next/head";

//Icons
import { InboxIcon } from "@heroicons/react/24/outline";

//Fetch and Mutation
import useSWR from "swr";

//Types
import { person, quote } from "../../types/global";

import QuickQuote from "../../components/views/quickQuote";
import Banner from "../../components/views/banner";
import QuotesTable from "../../components/views/quotesTable";

//Interfaces
import Card from "../../components/interface/card";
import Loader from "../../components/interface/loader";

//Default Function
export default function Dashboard() {
  //SWR fetch and cache revalidadtion
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
  const { data: rawQuotes } = useSWR("/api/v1/quotes", fetcher, {
    refreshInterval: 10000,
  });

  const quotes: quote[] = rawQuotes as quote[];

  //Loader return
  if (!quotes) {
    return <Loader />;
  }

  return (
    <div className="w-screen">
      <Head>
        <title>{"Wet Bat Dashboard"}</title>
      </Head>
      <div className="containerWrapper h-[calc(100vh-3rem)]  overflow-y-scroll">
        <div className="grid grid-cols-1 gap-5 p-4">
          <div className="w-full col-span-1 p-4 overflow-y-scroll bg-white rounded-lg shadow-md h-fit">
            <Card
              title={"Services"}
              icon={InboxIcon}
              isExpandable={false}
              isRefreshable={false}
              hasOptions={false}
            >
              <QuotesTable
                quotes={quotes.filter((quote) => quote.service)}
                expanded={true}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
