import { SingleParameter } from "general-language-syntax";
import * as React from "react";

export type SingleProps = {
  parameter: SingleParameter;
};

export const Single: React.FC<SingleProps> = ({ parameter }) => {
  return (
    <li>
      <strong>
        <code>{parameter.name}</code>
      </strong>
      : {parameter.description}
    </li>
  );
};
