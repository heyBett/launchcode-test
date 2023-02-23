import Image from "next/image";

type destination = {
  id: number;
  name: string;
  total: number;
  color: string;
};

export default function PopularMap() {
  const destinations: destination[] = [
    { id: 1, name: "Destino 1", total: 64, color: "bg-red-500" },
    { id: 2, name: "Destino 2", total: 42, color: "bg-emerald-500" },
    { id: 3, name: "Destino 3", total: 92, color: "bg-amber-500" },
    { id: 4, name: "Destino 4", total: 61, color: "bg-sky-500" },
    { id: 5, name: "Destino 5", total: 64, color: "bg-yellow-500" },
    { id: 6, name: "Destino 6", total: 42, color: "bg-rose-500" },
    { id: 7, name: "Destino 7", total: 92, color: "bg-orange-500" },
    { id: 8, name: "Destino 8", total: 61, color: "bg-blue-500" },
  ];

  return (
    <div className="flex flex-row justify-between w-full p-2 py-4 space-x-2">
      <div className="w-1/3 space-y-4">
        {destinations.map((graph: destination) => (
          <div className="flex flex-row items-center space-x-2" key={graph.id}>
            <p className="w-full">{graph.name}</p>
            <div className="w-full">
              <div
                className={"h-2 rounded-sm opacity-70 " + graph.color}
                style={{ width: graph.total + "%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative w-2/3">
        <div className="absolute top-0 right-0 flex-col justify-between hidden h-full p-4 space-y-2 bg-white border rounded-lg shadow-lg lg:flex w-72 border-wet-text/10">
          <Image
            src={"/images/beach.jpg"}
            className="object-cover rounded-lg max-h-32"
            height={400}
            width={700}
            alt=""
          />
          <h1 className="text-lg font-medium text-wet-dark">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-sm text-wet-text/50">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et
          </p>
          <div className="flex flex-row justify-between">
            <div className="text-wet-dark">
              <p className="font-medium">$12345</p>
              <p className="text-xs">PRE-NIGHT</p>
            </div>
            <button className="px-6 py-2 text-white rounded-full bg-wet-green ">
              Details
            </button>
          </div>
        </div>
        <Image src={"/images/map.jpg"} height={400} width={700} alt="" />
      </div>
    </div>
  );
}
