import React from "react";

import { Input } from "./input";
import { Output } from "./output";
import { AppScreen } from "./AppScreen";
import { useStoredState } from "./useStoredState";

export const App = () => {
  const [input, setInput] = useStoredState("input", undefined);

  return (
    <AppScreen>
      <Input initialValue={input} setInput={setInput} />
      <Output input={input} />
    </AppScreen>
  );
};
