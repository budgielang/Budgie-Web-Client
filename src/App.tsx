import React, { useState } from "react";

import { Input } from "./input";
import { Output } from "./output";
import { AppScreen } from "./AppScreen";

export const App = () => {
  const [input, setInput] = useState<string | undefined>();

  return (
    <AppScreen>
      <Input initialValue={input} setInput={setInput} />
      <Output input={input} />
    </AppScreen>
  );
};
