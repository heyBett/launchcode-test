import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { quote } from "../../types/global";
import AirportFinder from "../utils/airportFinder";

type Props = {
  from: Function;
  to: Function;
  existent: boolean;
  function: SubmitHandler<FieldValues>;
  quote?: quote;
  key: number;
};

export default function QuoteForm(props: Props) {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (props.existent) {
      const quote: quote = props.quote;
      setValue("departure", String(quote.departure).split("T")[0]);
      setValue("return", String(quote.return).split("T")[0]);
      setValue("people", quote.people);
      setValue("transportation", quote.transportation);
      setValue("name", quote.name);
      props.from(props.quote.from);
      props.to(props.quote.destination);
    }
  }, [props.existent]);

  let defaultFrom = null;
  let defaultTo = null;
  if (props.existent) {
    defaultFrom = props.quote.from;
    defaultTo = props.quote.destination;
  }

  return (
    <form
      key={props.key}
      onSubmit={handleSubmit(props.function)}
      className="flex flex-col py-4 space-y-4 text-left"
    >
      <div className="flex flex-row space-x-4 ">
        <div className="w-full bg-wet-background h-14">
          <p className="pt-1 ml-2 text-xs uppercase text-wet-text/50 ">From</p>
          <AirportFinder
            set={props.from}
            id="selectedFrom"
            default={defaultFrom}
          />
        </div>
        <div className="w-full bg-wet-background h-14">
          <p className="pt-1 ml-2 text-xs uppercase text-wet-text/50">
            Destination
          </p>
          <AirportFinder set={props.to} id="selectedTo" default={defaultTo} />
        </div>
      </div>
      <div className="flex flex-row space-x-4">
        <div className="w-full bg-wet-background h-14">
          <p className="pt-1 ml-2 text-xs uppercase text-wet-text/50">
            Depart Date
          </p>
          <input
            required
            {...register("departure")}
            type="date"
            className="w-full pl-2 text-xs text-wet-text border-transparent bg-wet-background !outline-none !ring-0 !border-none"
          />
        </div>
        <div className="w-full bg-wet-background h-14">
          <p className="pt-1 ml-2 text-xs uppercase text-wet-text/50">
            Return Date
          </p>
          <input
            required
            {...register("return")}
            type="date"
            className="w-full pl-2 text-xs text-wet-text border-transparent bg-wet-background !outline-none !ring-0 !border-none"
          />
        </div>
      </div>
      <div className="flex flex-row space-x-4">
        <div className="w-full bg-wet-background h-14">
          <p className="pt-1 ml-2 text-xs uppercase text-wet-text/50">People</p>
          <input
            required
            min={1}
            {...register("people")}
            type="number"
            className="w-full pl-2 text-xs text-wet-text border-transparent bg-wet-background !outline-none !ring-0 !border-none"
          />
        </div>
        <div className="w-full bg-wet-background h-14">
          <p className="pt-1 ml-2 text-xs uppercase text-wet-text/50">
            Transportation
          </p>
          <select
            className="w-full pl-2 text-xs text-wet-text border-transparent bg-wet-background !outline-none !ring-0 !border-none"
            {...register("transportation")}
          >
            <option value="Car">Rental Car</option>
            <option value="Taxi">Taxi</option>
            <option value="Bus">Bus</option>
            <option value="Metro">Metro</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row space-x-4">
        <div className="w-full bg-wet-background h-14">
          <p className="pt-1 ml-2 text-xs uppercase text-wet-text/50">Name</p>
          <input
            {...register("name")}
            required
            type="text"
            className="w-full pl-2 text-xs text-wet-text border-transparent bg-wet-background !outline-none !ring-0 !border-none"
          />
        </div>
        <div className="w-full">
          {props.existent ? (
            <button
              type="submit"
              className="flex items-center justify-center w-full font-semibold text-white rounded-full bg-wet-green h-14"
            >
              Save Quote
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center justify-center w-full font-semibold text-white rounded-full bg-wet-green h-14"
            >
              Create a Quote
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
