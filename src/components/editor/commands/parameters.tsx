import { IParameter } from "general-language-syntax";
import { RepeatingParameters } from "general-language-syntax";
import { SingleParameter } from "general-language-syntax";
import * as React from "react";

import { Repeating } from "./parameters/repeating";
import { Single } from "./parameters/single";

/**
 * Props for a Parameters component.
 */
export interface IProps {
    /**
     * GLS parameters for a command.
     */
    parameters: IParameter[];
}

/**
 * Component for a set of parameters.
 * 
 * @param props   Props for the component.
 * @returns The rendered component.
 */
export function Parameters(props: IProps): JSX.Element {
    return (
        <span className="parameters">
            {props.parameters.map(renderParameter)}
        </span>);
}

/**
 * Renders a single parameter.
 * 
 * @param parameter   Parameter to be rendered.
 * @param key   Ordeered identifier for the parameter.
 * @returns The rendered parameter.
 */
function renderParameter(parameter: IParameter, key: number): JSX.Element {
    if (parameter instanceof SingleParameter) {
        return <Single key={parameter.name} parameter={parameter} />;
    }

    if (parameter instanceof RepeatingParameters) {
        return <Repeating key={key} parameters={parameter} />;
    }

    throw new Error("Unknown parameter type: " + parameter);
}
