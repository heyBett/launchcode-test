import Image from "next/image";

export default function Banner() {
  return (
    <div className="flex flex-col w-full col-span-6 p-8 space-y-10 rounded-lg shadow-md xl:col-span-8 bg-gradient-to-r from-wet-green to-wet-dark lg:flex-row lg:space-y-0 lg:space-x-4 h-fit">
      <div className="flex items-center space-y-4 lg:w-1/2">
        <div className="text-white">
          <h1 className="mb-5 text-3xl font-semibold">
            Welcome to <br></br>your dashboard
          </h1>
          <p className="text-sm text-justify xl:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full space-y-4 lg:w-1/2">
        <Image
          src="/images/officeBackground.png"
          height={500}
          width={500}
          className="px-20"
          alt=""
        />
        <div className="flex flex-row justify-around lg:justify-between">
          <div className="flex flex-col items-center lg:flex-row">
            <h1 className="text-4xl sm:text-5xl text-wet-yellow">101</h1>
            <div className="flex flex-col items-center text-xs text-white uppercase sm:leading-5 sm:text-lg lg:items-start">
              <p>New</p>
              <p>Leads</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row">
            <h1 className="text-4xl sm:text-5xl text-wet-yellow">35</h1>
            <div className="flex flex-col items-center text-xs text-white uppercase sm:leading-5 sm:text-lg lg:items-start">
              <p>Quotes</p>
              <p>Created</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row">
            <h1 className="text-4xl sm:text-5xl text-wet-yellow">40</h1>
            <div className="flex flex-col items-center text-xs text-white uppercase sm:leading-5 sm:text-lg lg:items-start">
              <p>Pending</p>
              <p>Orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
