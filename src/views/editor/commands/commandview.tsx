import { observer } from "mobx-react";
import * as React from "react";

import { Command } from "general-language-syntax/dist/amd/Commands/Command";
import { Parameter } from "general-language-syntax/dist/amd/Commands/Parameters/Parameter";
import { RepeatingParameters } from "general-language-syntax/dist/amd/Commands/Parameters/RepeatingParameters";
import { SingleParameter } from "general-language-syntax/dist/amd/Commands/Parameters/SingleParameter";

export interface IProps {
    command: Command;
    name: string;
}

/**
 * Component for a text display of a GLS command.
 */
export class CommandView extends React.Component<IProps, void> {
    public render(): JSX.Element {
        return (
            <div className="command">
                <h3>{this.props.name}</h3>
                {this.renderParameters(this.props.command.getParameters())}
            </div>);
    }

    /**
     * 
     */
    private renderParameters(parameters: Parameter[]): JSX.Element {
        return (
            <span className="parameters">
                {parameters.map((parameter, i) => this.renderParameter(parameter, i))}
            </span>);
    }

    /**
     * 
     */
    private renderParameter(parameter: Parameter, i: number): JSX.Element {
        if (parameter instanceof SingleParameter) {
            return this.renderSingleParameter(parameter, i);
        }

        if (parameter instanceof RepeatingParameters) {
            return this.renderRepeatingParameters(parameter as RepeatingParameters, i);
        }

        throw new Error("Unknown parameter type: " + parameter);
    }

    /**
     * 
     */
    private renderSingleParameter(parameter: SingleParameter, i: number): JSX.Element {
        return (
            <span className="parameter single-parameter" key={i}>
                <span className="parameter-name">{parameter.name}</span>
            </span>);
    }

    /**
     * 
     */
    private renderRepeatingParameters(parameter: RepeatingParameters, i: number): JSX.Element {
        return (
            <span className="parameter repeating-parameters" key={i}>
                {this.renderParameters(parameter.parameters)}
            </span>);
    }
}
