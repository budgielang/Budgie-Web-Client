/// <reference path="../../../typings/browser/ambient/react/index.d.ts" />
/// <reference path="../../../References/GLS.d.ts" />

import * as React from "react";

import Parameters = GLS.Commands.Parameters;
import Parameter = Parameters.Parameter;
import RepeatingParameters = Parameters.RepeatingParameters;
import SingleParameter = Parameters.SingleParameter;

interface ICommandComponentProps {
    command: GLS.Commands.Command;
    name: string;
}

interface ICommandComponentState { }

/**
 * A real-time GLS Preview component.
 */
export default class CommandComponent extends React.Component<ICommandComponentProps, ICommandComponentState> {
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
            <span className="parameter single-parameter">
                <span className="parameter-name">{parameter.name}</span>
            </span>);
    }

    /**
     * 
     */
    private renderRepeatingParameters(parameter: RepeatingParameters, i: number): JSX.Element {
        return (
            <span className="parameter repeating-parameters">
                {this.renderParameters(parameter.parameters)}
            </span>);
    }
}
