import { RepeatingParameters } from "budgie";
import * as React from "react";

import { Parameters as ParametersComponent } from "./index";

export type RepeatingProps = {
  parameters: RepeatingParameters;
};

export const Repeating: React.FC<RepeatingProps> = ({ parameters }) => {
  return (
    <li>
      <em>{parameters.description}:</em>
      <ParametersComponent parameters={parameters.parameters} />
    </li>
  );
};
