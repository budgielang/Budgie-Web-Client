import { Command as GlsCommand } from "general-language-syntax/dist/amd/Commands/Command";
import * as React from "react";

import { Parameters } from "./parameters";

/**
 * Props for a CommandView component.
 */
export interface IProps {
    /**
     * The command being displayed.
     */
    command: GlsCommand;

    /**
     * The displayed command's name.
     */
    name: string;
}

/**
 * Component for a text display of a GLS command.
 * 
 * @param props   Props for the component.
 * @returns The rendered component.
 */
export function Command(props: IProps): JSX.Element {
    return (
        <div className="command">
            <h3>{props.name}</h3>
            <Parameters parameters={props.command.getParameters()} />
        </div>);
}
