import * as React from "react";

import { Command } from "gls/src/Commands/Command";
import { Parameter } from "gls/src/Commands/Parameters/Parameter";
import { RepeatingParameters } from "gls/src/Commands/Parameters/RepeatingParameters";
import { SingleParameter } from "gls/src/Commands/Parameters/SingleParameter";

export interface ICommandComponentProps {
    command: Command;
    name: string;
}

export interface ICommandComponentState { }

/**
 * A real-time GLS Preview component.
 */
export class CommandComponent extends React.Component<ICommandComponentProps, ICommandComponentState> {
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
