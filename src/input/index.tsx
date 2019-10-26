import React from "react";

import { AvailableCommands } from "./AvailableCommands";
import { BudgieInput } from "./BudgieInput";
import { SampleChooser } from "./SampleChooser";

import "./styles.css";

export type InputProps = {
  initialValue?: string;
  setInput: (input: string) => void;
};

export const Input: React.FC<InputProps> = ({ initialValue, setInput }) => {
  return (
    <div className="input">
      <div className="input--main">
        <BudgieInput initialValue={initialValue} setInput={setInput} />
      </div>
      <div className="input--help">
        <AvailableCommands />
        <SampleChooser
          sampleNeeded={initialValue === undefined}
          setInput={setInput}
        />
      </div>
    </div>
  );
};
