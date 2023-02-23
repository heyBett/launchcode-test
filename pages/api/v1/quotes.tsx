import { prisma } from "../../../service/prismaInit";
import { quote } from "../../../types/global";

export default async function handle(
  req: { method: string; body: quote; query: { id: string } },
  res: { json: (arg0: quote[]) => any }
) {
  if (req.method === "POST") {
    const data: quote = req.body;

    const createQuote = prisma.quote.create({
      data: {
        departure: new Date(data.departure),
        return: new Date(data.return),
        destination: data.destination,
        from: data.from,
        name: data.name,
        people: parseInt(data.people as unknown as string),
        transportation: data.transportation,
      },
    });
    return res.json((await createQuote) as unknown as quote[]);
  }

  if (req.method === "GET") {
    const getQuotes = prisma.quote.findMany({});
    return res.json((await getQuotes) as quote[]);
  }

  if (req.method === "PATCH") {
    type partialQuote = {
      name?: string;
      from?: string;
      destination?: string;
      departure?: Date;
      return?: Date;
      people?: number;
      transportation?: string;
      service?: boolean;
    };

    async function convertTypes(quote: quote) {
      let object: partialQuote = {};

      if (quote.name) {
        object.name = quote.name;
      }
      if (quote.from) {
        object.from = quote.from;
      }
      if (quote.destination) {
        object.destination = quote.destination;
      }
      if (quote.departure) {
        object.departure = new Date(quote.departure);
      }
      if (quote.return) {
        object.return = new Date(quote.return);
      }
      if (quote.people) {
        object.people = parseInt(quote.people as unknown as string);
      }
      if (quote.transportation) {
        object.transportation = quote.transportation;
      }
      if (quote.service) {
        object.service =
          (quote.service as unknown) === "true" || quote.service === true;
      }

      const data: partialQuote = object;
      return data;
    }

    const data = await convertTypes(req.body);
    const id: string = req.query.id;
    console.log(data);

    const updateQuote = prisma.quote.update({
      where: { id: id },
      data,
    });
    return res.json((await updateQuote) as unknown as quote[]);
  }

  if (req.method === "DELETE") {
  }
}
