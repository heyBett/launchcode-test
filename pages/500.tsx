// pages/404.js
export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-row items-center text-gray-500">
        <h1 className="pr-4 text-4xl border-r-2 border-gray-500">500</h1>
        <h1 className="pl-4 ">Server error</h1>
      </div>
      <div className="mt-4 text-center text-gray-500">
        <p className="font-semibold">
          There is a problem with this application.
        </p>
        <p>
          You can contact our support team{" "}
          <a
            className="font-semibold text-wet-dark"
            href="mailto:luiz@codx.dev"
          >
            Here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
