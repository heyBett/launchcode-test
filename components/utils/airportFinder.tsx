import { airports } from "../../data/airports";
import { airport } from "../../types/global";
import AsyncSelect from "react-select/async";

interface Props {
  id: string;
  set: Function;
  default?: string;
}

export default function AirportFinder(props: Props) {
  function emptyHandler(element: { inputValue: string }) {
    let response = "Please, type the airport name or code";
    if (element.inputValue.length > 2) {
      response = "We didn't find a match for this...";
    }
    if (element.inputValue.length > 0 && element.inputValue.length <= 2) {
      response = "Please, enter at least 3 digits";
    }
    return response;
  }

  const filterAirports = (inputValue: string) => {
    if (inputValue.length >= 3) {
      return airports.filter(
        (i) =>
          i.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          i.code.toLowerCase().includes(inputValue.toLowerCase())
      );
    } else {
      return [];
    }
  };

  const loadOptions = (
    inputValue: string,
    callback: (options: airport[]) => void
  ) => {
    setTimeout(() => {
      const filtered = filterAirports(inputValue);
      callback(filtered);
    }, 500);
  };

  let selected = null;
  if (props.default !== null) {
    selected = airports.find((airport) => airport.code === props.default);
  }

  return (
    <AsyncSelect
      cacheOptions
      loadOptions={loadOptions}
      className="w-full  text-xs text-wet-text border-transparent bg-wet-background !outline-none !ring-0 !border-none !ring-transparent"
      options={airports}
      placeholder="Type..."
      theme={(theme) => ({
        ...theme,
        borderRadius: 7,
        groupHeading: "#E11D48",
        colors: {
          ...theme.colors,
          primary25: "#CCD0DC",
          primary: "transparent",
          neutral0: "#EDF0F9",
          neutral20: "transparent",
          neutral40: "black",
          neutral80: "black",
        },
      })}
      id={props.id}
      defaultValue={selected}
      onChange={(e) => props.set(e?.code)}
      noOptionsMessage={(e) => emptyHandler(e) as String}
      loadingMessage={() => "Searching..."}
      getOptionValue={(option: airport) => `${option.code}`}
      getOptionLabel={(option: airport) =>
        `${option.name + " (" + option.code + ")"}`
      }
      isClearable
      isSearchable
    />
  );
}
