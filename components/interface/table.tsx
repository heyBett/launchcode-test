import axios from "axios";
import { useState } from "react";
import { useSWRConfig } from "swr";
import { quote } from "../../types/global";
import dateFormatter from "../utils/dateFormatter";

type header = {
  name: string;
  expanded?: boolean;
};

const headers: header[] = [
  { name: "id #" },
  { name: "Name" },
  { name: "Destination" },
  { name: "Departure", expanded: true },
  { name: "Return", expanded: true },
  { name: "People", expanded: true },
  { name: "Transp.", expanded: true },
  { name: "Price" },
  { name: "Convert", expanded: true },
  { name: "Edit", expanded: true },
];

function isExpanded(header: header[], expanded: boolean) {
  function filter(header: header) {
    return header.expanded === expanded || header.expanded === undefined;
  }
  const result = header.filter(filter);
  return result;
}

export function Row(
  quote: quote,
  expanded: boolean,
  set: Function,
  modal: Function
) {
  const { mutate } = useSWRConfig();

  async function convertQuote(quote: quote) {
    console.log(quote.service);
    console.log(quote.service === false);

    const conversion = await axios({
      method: "PATCH",
      url: "/api/v1/quotes?id=" + quote.id,
      data: {
        service: quote.service,
      },
    });
    console.log(conversion.data);

    mutate("/api/v1/quotes");
  }
  function openModal(quote: quote) {
    console.log(quote);
    set(quote);
    modal(true);
  }

  return (
    <>
      <tr key={quote.id} className=" even:bg-white odd:bg-wet-background">
        <td className="py-2.5 px-3 text-xs whitespace-nowrap">
          {quote.numericId}
        </td>
        <td className="py-2 pr-3 text-xs whitespace-nowrap ">{quote.name}</td>
        <td className="py-2 pr-3 text-xs whitespace-nowrap 6">
          {quote.from + " > " + quote.destination}
        </td>
        {expanded && (
          <>
            <td className="pr-3 text-xs whitespace-nowrap ">
              {dateFormatter(quote.departure as unknown as string)}
            </td>
            <td className="pr-3 text-xs whitespace-nowrap ">
              {dateFormatter(quote.return as unknown as string)}
            </td>
            <td className="pr-3 text-xs whitespace-nowrap ">{quote.people}</td>
            <td className="pr-3 text-xs whitespace-nowrap ">
              {quote.transportation}
            </td>
          </>
        )}
        <td className="py-2 text-xs whitespace-nowrap ">
          {"$ " + quote.people * 1000}
        </td>
        {expanded && (
          <>
            <td className="pr-3 text-xs whitespace-nowrap ">
              <button
                className={
                  quote.service
                    ? "px-2 py-1 text-white rounded-md bg-wet-red hover:bg-wet-red/80"
                    : "px-2 py-1 text-white rounded-md bg-wet-green hover:bg-wet-green/80"
                }
                onClick={() => convertQuote(quote)}
              >
                {quote.service ? "Convert to Quote" : " Convert to Service"}
              </button>
            </td>
            <td className="pr-3 text-xs whitespace-nowrap ">
              <button
                onClick={() => openModal(quote)}
                className="px-2 py-1 text-white rounded-md bg-wet-dark hover:bg-wet-dark/70"
              >
                Edit
              </button>
            </td>
          </>
        )}
      </tr>
    </>
  );
}

export function Header(expanded: boolean) {
  return isExpanded(headers as header[], expanded as boolean).map(
    (header: header) => (
      <th
        key={header.name}
        scope="col"
        className={
          header.name.length > 6
            ? "pt-2 pb-1 text-sm font-medium text-left uppercase text-wet-text whitesace-nowrap min-w-[120px]"
            : "pt-2 pb-1 text-sm font-medium text-left uppercase text-wet-text whitesace-nowrap min-w-[60px]"
        }
      >
        {header.name}
      </th>
    )
  );
}
