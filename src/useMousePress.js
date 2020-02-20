import { useEffect, useState } from "react";

export default function useKeyPress() {
  const [clickPos, setClickPos] = useState({x: null, y: null});
  useEffect(() => {
    const clickHandler = function(e) {
      setClickPos({x: e.clientX, y: e.clientY})
    };
    window.addEventListener("click", clickHandler);
    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, []);
  return clickPos;
}
