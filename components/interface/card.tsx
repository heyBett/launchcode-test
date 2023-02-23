import {
  ArrowsPointingOutIcon,
  ArrowPathIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

type Props = {
  children?: React.ReactElement;
  title: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  isExpandable: boolean;
  isRefreshable: boolean;
  hasOptions: boolean;
};

export default function Card(props: Props) {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-row items-center justify-between pb-3 border-b border-wet-text/20">
        <div className="flex flex-row items-center space-x-2">
          <props.icon className="w-8 h-6 text-wet-green" />
          <p className="text-lg text-wet-dark">{props.title}</p>
        </div>
        <div className="flex flex-row space-x-3">
          {props.isExpandable && (
            <ArrowsPointingOutIcon className="w-6 h-6 text-wet-text/50" />
          )}
          {props.isRefreshable && (
            <ArrowPathIcon className="w-6 h-6 text-wet-text/50" />
          )}
          {props.hasOptions && (
            <EllipsisVerticalIcon className="w-6 h-6 text-wet-text/50" />
          )}
        </div>
      </div>
      {props.children}
    </div>
  );
}
