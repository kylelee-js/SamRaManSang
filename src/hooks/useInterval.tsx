import { useEffect, useRef } from "react";

type IntervalFunction = () => unknown | void;

/**
 * props.path으로 RouteContext currentPathname을 바꾸는 컴포넌트
 * @param {LinkProps} props
 * @param {string} props.to - 이동하려고하는 path
 * @param {ReactNode} props.children
 * @returns
 */

function useInterval(callback: IntervalFunction, delay: number) {
  const savedCallback = useRef<IntervalFunction | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current();
      }
    }
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default useInterval;
