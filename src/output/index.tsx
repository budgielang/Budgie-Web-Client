import MonacoEditor from "@monaco-editor/react";
import React, { useMemo } from "react";
import { LanguagesBag, Gls } from "general-language-syntax";

import { useStoredState } from "../useStoredState";
import "./styles.css";

export type OutputProps = {
  input?: string;
};

const languagesBag = new LanguagesBag();
const languageNames = languagesBag.getLanguageNames();

const languageAliases = new Map([["C#", "csharp"]]);

const tryConvert = (gls: Gls, input: string[]) => {
  try {
    return gls.convert(input).join("\n");
  } catch (error) {
    return error;
  }
};

export const Output: React.FC<OutputProps> = ({ input }) => {
  const [languageName, setLanguageName] = useStoredState(
    "language-name",
    languageNames[0]
  );
  const gls = useMemo(() => new Gls(languageName), [languageName]);

  if (input === undefined) {
    return null;
  }

  const value = tryConvert(gls, input.split(/\r\n|\r|\n/g));
  if (value instanceof Error) {
    return (
      <pre>
        <code>{value.message}</code>
      </pre>
    );
  }

  const onLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageName(event.target.value);
  };

  return (
    <div className="output">
      <div className="output--editor">
        <MonacoEditor
          language={
            languageAliases.get(languageName) || languageName.toLowerCase()
          }
          options={{
            minimap: {
              enabled: 0
            },
            scrollBeyondLastLine: false
          }}
          value={value}
        />
      </div>
      <div className="output--options">
        <span>Choose an output language: </span>
        <select onChange={onLanguageChange} value={languageName}>
          {languageNames.map(languageName => (
            <option key={languageName} value={languageName}>
              {languageName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
