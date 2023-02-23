export default function Loader() {
  return (
    <div className="flex items-center justify-center loading-overlay bg-wet-green">
      <div className="bounce-loader">
        <div className="bounce">
          <img
            className="w-auto h-24"
            src="/images/logos/wetbat.svg"
            alt="Loading Wet Bat Travel"
          />
        </div>
      </div>
    </div>
  );
}
