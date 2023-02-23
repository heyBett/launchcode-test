import Head from "next/head";
import { useState, useEffect } from "react";

//Icons
import {
  ForwardIcon,
  BookmarkIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
  PaperAirplaneIcon,
  ChartBarIcon,
  ChartPieIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";

//Fetch and Mutation
import useSWR from "swr";

//Static data
import { people } from "../data/people";
import { graphData } from "../data/data";

//Types
import { person, quote } from "../types/global";

//Views
import LeadsList from "../components/views/leadsList";
import ChatList from "../components/views/chatList";
import PopularMap from "../components/views/popularMap";
import RevenueChart from "../components/views/revenueChart";
import QuickQuote from "../components/views/quickQuote";
import Banner from "../components/views/banner";
import QuotesTable from "../components/views/quotesTable";
import PotentialRevenueChart from "../components/views/potentialRevenueChart";
import CloseRatio from "../components/views/closeRatio";

//Interfaces
import Card from "../components/interface/card";
import Loader from "../components/interface/loader";

//Utils
import useWindowSize from "../components/utils/windowSize";

//Default Function
export default function Dashboard() {
  //SWR fetch and cache revalidadtion
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
  const { data: rawQuotes } = useSWR("/api/v1/quotes", fetcher, {
    refreshInterval: 10000,
  });

  const quotes: quote[] = rawQuotes as quote[];

  //Grid Manipulation
  const [listRule, setListRule] = useState(false);
  const [tableRule, setTableRule] = useState(false);
  const firstHeight = useWindowSize("quickQuoteCard", quotes);
  const secondHeight = useWindowSize("popularMap", quotes);

  useEffect(() => {
    setListRule(window?.innerWidth > 1280);
    setTableRule(window?.innerWidth > 640);
  }, [firstHeight, secondHeight]);

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
        <div className="grid gap-5 p-4 sm:grid-cols-6 xl:grid-cols-8">
          <Banner />
          <div
            className="w-full col-span-6 p-4 bg-white rounded-lg shadow-md sm:col-span-3 h-fit"
            id="quickQuoteCard"
          >
            <Card
              title={"Quick quote"}
              icon={ForwardIcon}
              isExpandable={true}
              isRefreshable={false}
              hasOptions={false}
            >
              <QuickQuote />
            </Card>
          </div>

          <div
            className="w-full col-span-6 p-4 overflow-y-scroll bg-white rounded-lg shadow-md sm:col-span-3 h-fit"
            style={{
              height: tableRule && firstHeight.height,
            }}
          >
            <Card
              title={"Pending quotes"}
              icon={BookmarkIcon}
              isExpandable={true}
              isRefreshable={true}
              hasOptions={false}
            >
              <QuotesTable
                quotes={quotes.filter((quote) => !quote.service)}
                expanded={false}
              />
            </Card>
          </div>

          <div
            className="w-full col-span-6 p-4 overflow-y-scroll bg-white rounded-lg shadow-md xl:col-span-2 sm:col-span-3 h-fit"
            style={{
              height: listRule && firstHeight.height,
              maxHeight: "500px",
            }}
          >
            <Card
              title={"New Leads"}
              icon={EnvelopeIcon}
              isExpandable={true}
              isRefreshable={true}
              hasOptions={false}
            >
              <div className="overflow-x-hidden">
                <div className="inline-block min-w-full py-2 align-middle">
                  <div className="overflow-y-scroll ">
                    <table className="min-w-full">
                      <tbody className="">
                        {LeadsList(
                          people as person[],
                          firstHeight.width as number
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div
            className="w-full col-span-6 p-4 overflow-y-scroll bg-white rounded-lg shadow-md h-fit xl:col-span-2 sm:col-span-3"
            style={{
              height: listRule && secondHeight.height,
              maxHeight: "500px",
            }}
          >
            <Card
              title={"Team Chat"}
              icon={ChatBubbleLeftIcon}
              isExpandable={false}
              isRefreshable={false}
              hasOptions={true}
            >
              <div className="overflow-x-auto ">
                <div className="inline-block min-w-full py-2 align-middle">
                  <div className="overflow-scroll ">
                    <table className="min-w-full">
                      <tbody className="">
                        {ChatList(
                          people as person[],
                          firstHeight.width as number
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div
            className="hidden w-full col-span-6 p-4 bg-white rounded-lg shadow-md sm:block h-fit"
            id="popularMap"
          >
            <Card
              title={"Popular Destinations & packages"}
              icon={PaperAirplaneIcon}
              isExpandable={false}
              isRefreshable={false}
              hasOptions={true}
            >
              <PopularMap />
            </Card>
          </div>
          <div className="w-full col-span-6 p-4 overflow-y-scroll bg-white rounded-lg shadow-md sm:col-span-3 h-fit">
            <Card
              title={"Revenue"}
              icon={ChartBarIcon}
              isExpandable={false}
              isRefreshable={false}
              hasOptions={true}
            >
              <RevenueChart data={graphData} />
            </Card>
          </div>
          <div className="w-full col-span-6 p-4 overflow-y-scroll bg-white rounded-lg shadow-md sm:col-span-3 h-fit">
            <Card
              title={"Potential Revenue"}
              icon={ChartPieIcon}
              isExpandable={false}
              isRefreshable={false}
              hasOptions={true}
            >
              <PotentialRevenueChart data={graphData} />
            </Card>
          </div>
          <div className="w-full col-span-6 p-4 overflow-y-scroll bg-white rounded-lg shadow-md sm:col-span-3 lg:col-span-2 h-fit">
            <Card
              title={"Close Ratio"}
              icon={ArrowsRightLeftIcon}
              isExpandable={false}
              isRefreshable={false}
              hasOptions={true}
            >
              <CloseRatio data={graphData} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
