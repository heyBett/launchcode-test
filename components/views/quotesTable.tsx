import { useState } from "react";
import { quote } from "../../types/global";
import EditModal from "../interface/modal";

import { Header, Row } from "../interface/table";
type Props = {
  quotes: quote[];
  expanded: boolean;
};

export default function QuotesTable(props: Props) {
  const [selectedQuote, setSelectedQuote] = useState({
    id: "1",
    numericId: 1,
    name: "1",
    from: "1",
    destination: "1",
    departure: new Date("2022-12-03T00:00:00.000Z"),
    return: new Date("2023-05-04T00:00:00.000Z"),
    people: 1,
    transportation: "Rental Car",
    service: false,
  });
  const [open, setOpen] = useState(false);

  const quotes: quote[] = props.quotes;
  const expanded: boolean = props.expanded;

  return (
    <div className="-mx-4 overflow-x-auto ">
      {expanded && (
        <EditModal open={open} set={setOpen} quote={selectedQuote} />
      )}
      <div className="inline-block min-w-full px-4 py-2 align-middle lg:px-6">
        <div className="flex items-center justify-center overflow-hidden">
          <table className="min-w-full">
            <thead className="">
              <tr className="">{Header(expanded)}</tr>
            </thead>
            <tbody className="pt-1 text-wet-text">
              {quotes
                .sort((a, b) => a.id.localeCompare(b.id))
                .map((quote: quote) =>
                  Row(quote, expanded, setSelectedQuote, setOpen)
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
