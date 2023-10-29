import { useEffect, useState } from "react";
import { Volt } from "./Observable";

export const useRelay = <T>(
  volt: Volt<T>
): [T, (arg: T | ((prevState: T) => T)) => void] => {
  const [state, _setState] = useState<T>(volt.initialData);

  useEffect(() => {
    volt.subscribe(_setState);
  }, [volt]);

  const setState = (newState: T | ((prevState: T) => T)) => {
    if (newState instanceof Function) {
      volt.notify(newState(state));
    } else {
      volt.notify(newState);
    }
  };

  return [state, setState];
};
