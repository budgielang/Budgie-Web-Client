import { ControlledEditor } from "@monaco-editor/react";
import React from "react";

export type GlsInputProps = {
  initialValue?: string;
  setInput: (input: string) => void;
};

export const GlsInput: React.FC<GlsInputProps> = ({
  initialValue,
  setInput
}) => {
  const onChange = (_: any, value: string | undefined) => {
    setInput(value!);
    return value;
  };

  return (
    <ControlledEditor
      language="gls"
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
