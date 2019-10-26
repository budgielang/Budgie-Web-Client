import { KeywordParameter } from "budgie";
import * as React from "react";

export type KeywordProps = {
  parameter: KeywordParameter;
};

export const Keyword: React.FC<KeywordProps> = ({ parameter }) => {
  return (
    <li>
      <strong>
        {Array.from(parameter.literals).map((literal, index) => (
          <span key={literal}>
            {index !== 0 && <em> | </em>}
            <code>{literal}</code>
          </span>
        ))}
      </strong>
      {parameter.required && <em> (required)</em>}: {parameter.description}
    </li>
  );
};
