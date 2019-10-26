import MonacoEditor from "@monaco-editor/react";
import React, { useMemo } from "react";
import { LanguagesBag, Budgie } from "budgie";

import { useStoredState } from "../useStoredState";
import "./styles.css";

export type OutputProps = {
  input?: string;
};

const languagesBag = new LanguagesBag();
const languageNames = languagesBag.getLanguageNames();

const languageAliases = new Map([["C#", "csharp"]]);

const tryConvert = (budgie: Budgie, input: string[]) => {
  try {
    return budgie.convert(input).join("\n");
  } catch (error) {
    return error;
  }
};

export const Output: React.FC<OutputProps> = ({ input }) => {
  const [languageName, setLanguageName] = useStoredState(
    "language-name",
    languageNames[0]
  );
  const budgie = useMemo(() => new Budgie(languageName), [languageName]);

  if (input === undefined) {
    return null;
  }

  const value = tryConvert(budgie, input.split(/\r\n|\r|\n/g));
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
        <label className="non-mobile" id="choose-out-language">
          Choose an output language:{" "}
        </label>
        <select
          aria-label="Choose an output language"
          aria-labelledby="choose-out-language"
          className="output--language-chooser"
          onChange={onLanguageChange}
          value={languageName}
        >
          {languageNames.map(languageName => (
            <option key={languageName} value={languageName}>
              {languageName}
            </option>
          ))}
        </select>
      </div>
      <a
        className="output--github"
        href="https://github.com/budgielang/Budgie-Web-Client"
        rel="noopener noreferrer"
        target="_blank"
      >
        See Budgie-Web-Client on GitHub
      </a>
    </div>
  );
};
