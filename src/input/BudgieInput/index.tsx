import { ControlledEditor } from "@monaco-editor/react";
import React from "react";

export type BudgieInputProps = {
  initialValue?: string;
  setInput: (input: string) => void;
};

export const BudgieInput: React.FC<BudgieInputProps> = ({
  initialValue,
  setInput
}) => {
  const onChange = (_: any, value: string | undefined) => {
    setInput(value!);
    return value;
  };

  return (
    <ControlledEditor
      language="budgie"
      options={{
        minimap: {
          enabled: 0
        },
        scrollBeyondLastLine: false
      }}
      onChange={onChange}
      value={initialValue}
    />
  );
};
