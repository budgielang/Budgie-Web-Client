import { SingleParameter as GlsSingleParameter } from "general-language-syntax/dist/amd/Commands/Parameters/SingleParameter";
import * as React from "react";

/**
 * Props for a Single component.
 */
export interface IProps {
    /**
     * Single GLS parameter.
     */
    parameter: GlsSingleParameter;
}

/**
 * Component for a single parameter.
 * 
 * @param props   Props for the component.
 * @returns The rendered component.
 */
export function Single(props: IProps): JSX.Element {
    return (
        <span className="parameter single-parameter">
            <span className="parameter-name">{props.parameter.name}</span>
        </span>);
}
