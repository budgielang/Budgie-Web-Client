import { RepeatingParameters as GlsRepeatingParameters } from "general-language-syntax";
import * as React from "react";

import { Parameters as ParametersComponent } from "../parameters";

/**
 * Props for a Repeating component.
 */
export interface IProps {
    /**
     * Repeating GLS parameter.
     */
    parameters: GlsRepeatingParameters;
}

/**
 * Component for a set of parameters.
 * 
 * @param props   Props for the component.
 * @returns The rendered component.
 */
export function Repeating(props: IProps): JSX.Element {
    return (
        <span className="parameters">
            <ParametersComponent parameters={props.parameters.parameters} />
        </span>);
}
