import { useEffect } from "react";

function useKeydown(key, callback) {
  useEffect(() => {
    function handleEscape(e) {
      if (e.code === key) {
        callback();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [key, callback]);
}

export default useKeydown;
