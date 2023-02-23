import Image from "next/image";
import { person } from "../../types/global";

export default function LeadsList(people: person[], width: number) {
  function truncateMessage(message: string) {
    if (width < 1330 && width > 1279) {
      return message.slice(0, 18) + "...";
    } else {
      return message.slice(0, 25) + "...";
    }
  }

  function truncateName(name: string) {
    if (width < 1330 && width > 1279) {
      return name.slice(0, 14) + "...";
    } else {
      return name;
    }
  }
  return people.map((person: person) => (
    <tr key={person.name}>
      <td className="py-4 text-sm whitespace-nowrap">
        <div className="flex items-center justify-between">
          <div className="flex flex-row w-10 h-10">
            <Image
              className="w-10 h-10 rounded-full"
              height={50}
              width={50}
              src={person.image}
              alt=""
            />
            <div className="flex flex-row justify-between ml-4">
              <div className="flex flex-col">
                <div className="font-medium text-wet-text">
                  {truncateName(person.name)}
                </div>

                <div className="text-xs text-wet-divider">
                  {truncateMessage(person.message)}
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-wet-text">{person.time}</div>
        </div>
      </td>
    </tr>
  ));
}
