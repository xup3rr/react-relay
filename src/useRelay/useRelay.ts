/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Observable } from "./Observable";

export const useRelay = <T>(
  initialState: T extends (...args: any[]) => any ? never : T
): [T, (arg: T) => void] => {
  const [state, _setState] = useState<T>(initialState);

  Observable.subscribe(_setState);

  const setState = (newState: T) => {
    Observable.notify(newState);
  };

  return [state, setState];
};
