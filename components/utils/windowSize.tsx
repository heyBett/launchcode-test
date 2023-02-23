import { useEffect, useState } from "react";

type size = {
  width: number;
  height: number;
};

export default function useWindowSize(element, quotes) {
  const [size, setSize] = useState({ width: 0 as number, height: 0 as number });

  useEffect(() => {
    function updateSize() {
      if (quotes) {
        setSize({
          width: window.innerWidth as number,
          height: document.getElementById(element).offsetHeight as number,
        });
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [quotes]);

  return size as size;
}
