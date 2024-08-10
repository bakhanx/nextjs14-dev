import { useRef } from "react";

const useThrottle = (callback: VoidFunction, delay = 1000) => {
  const lastRun = useRef(Date.now());
  return () => {
    const timedElapsed = Date.now() - lastRun.current;
    if (timedElapsed > delay) {
      callback();
      lastRun.current = Date.now();
    }
  };
};

export default useThrottle;
