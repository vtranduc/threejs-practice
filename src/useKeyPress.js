import { useEffect, useState } from "react";

export default function useKeyPress(targetKeys) {
  const [key, setKey] = useState(false);
  useEffect(() => {
    const downHandler = function({ key }) {
      if (targetKeys.includes(key)) {
        setKey(true);
      }
    };
    const upHandler = function({ key }) {
      if (targetKeys.includes(key)) {
        setKey(false);
      }
    };
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKeys]);
  return key;
}
