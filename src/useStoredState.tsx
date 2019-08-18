import { useState } from "react";

const prefix = "gls-web-client-prefix-";

export const useStoredState = <T extends string | undefined>(
  keyAfterPrefix: string,
  initial: T
) => {
  const key = `${prefix}${keyAfterPrefix}`;
  const stored = localStorage.getItem(key);
  const realInitial = stored === null ? initial : stored;

  const [state, setState] = useState(realInitial);

  if (stored === null && initial !== undefined) {
    localStorage.setItem(key, initial!);
  }

  return [
    state,
    (newState: string) => {
      localStorage.setItem(key, newState);
      setState(newState);
    }
  ] as const;
};
