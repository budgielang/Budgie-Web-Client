import {
  IParameter,
  RepeatingParameters,
  SingleParameter,
  KeywordParameter
} from "general-language-syntax";
import * as React from "react";

import { Keyword } from "./Keyword";
import { Repeating } from "./Repeating";
import { Single } from "./Single";

export type ParametersProps = {
  parameters: IParameter[];
};

export const Parameters: React.FC<ParametersProps> = ({ parameters }) => {
  return <ul className="parameters">{parameters.map(renderParameter)}</ul>;
};

function renderParameter(parameter: IParameter, key: number) {
  if (parameter instanceof KeywordParameter) {
    return <Keyword key={key} parameter={parameter} />;
  }

  if (parameter instanceof RepeatingParameters) {
    return <Repeating key={key} parameters={parameter} />;
  }

  if (parameter instanceof SingleParameter) {
    return <Single key={key} parameter={parameter} />;
  }

  return null;
}
