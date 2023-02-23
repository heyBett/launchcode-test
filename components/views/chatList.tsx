import Image from "next/image";
import { ChatBubbleLeftIcon as SolidChat } from "@heroicons/react/24/solid";
import { person } from "../../types/global";

export default function ChatList(people: person[], width: number) {
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
          <div className="relative flex flex-row w-10 h-10">
            <div className="absolute right-0 z-10 -translate-x-2 -translate-y-1">
              <div className="absolute w-3 h-3 rounded-full bg-wet-green"></div>
              <div className="absolute w-3 h-3 rounded-full bg-wet-green animate-ping"></div>
            </div>
            <Image
              className="w-10 h-10 rounded-md"
              height={50}
              width={50}
              src={person.image}
              alt=""
            />
            <div className="flex flex-row justify-between ml-4">
              <div className="flex flex-col">
                <div className="font-medium text-wet-text">
                  {truncateName(person.name as string)}
                </div>

                <div className="text-xs text-wet-divider">
                  {truncateMessage(person.message as string)}
                </div>
              </div>
            </div>
          </div>

          <div>
            <SolidChat className="w-10 h-6 text-wet-green" />
          </div>
        </div>
      </td>
    </tr>
  ));
}
