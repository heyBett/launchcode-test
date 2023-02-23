import axios from "axios";
import { quote } from "../../types/global";
import { useSWRConfig } from "swr";
import { useState } from "react";
import QuoteForm from "../interface/quoteForm";

export default function QuickQuote() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [key, setKey] = useState(0);
  const { mutate } = useSWRConfig();

  async function onSubmit(data: quote) {
    if (from === "" || from === undefined || to === "" || to === undefined) {
      alert("Please, provide From and To airports ");
    } else {
      const newQuote = await axios({
        method: "POST",
        url: "/api/v1/quotes",
        data: {
          departure: new Date(data.departure),
          destination: to,
          from: from,
          name: data.name,
          people: parseInt(data.people as unknown as string),
          return: new Date(data.return),
          transportation: data.transportation,
        },
      });
      mutate("/api/v1/quotes");
      setKey((key as number) + 1);
    }
  }
  return (
    <div>
      <QuoteForm
        key={key}
        from={setFrom}
        to={setTo}
        function={onSubmit}
        existent={false}
      />
    </div>
  );
}
