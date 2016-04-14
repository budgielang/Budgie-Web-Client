/// <reference path="../../../typings/browser/ambient/react/index.d.ts" />
/// <reference path="../../../References/GLS.d.ts" />

import * as React from "react";

import CommandComponent from "./CommandComponent";

/**
 * Properties for a CommandsListComponent.
 */
interface ICommandsListProps {
    
}

/**
 * State for a CommandsListComponent.
 */
interface ICommandsListState {
    /**
     * A user-given filter on which commands to show. 
     */
    filter: string;
}

/**
 * A real-time GLS Preview component.
 */
export default class CommandsListComponent extends React.Component<ICommandsListProps, ICommandsListState> {
    /**
     * 
     */
    private language: GLS.Languages.TypeScript = new GLS.Languages.TypeScript();

    /**
     * 
     */
    private conversionContext: GLS.ConversionContext = new GLS.ConversionContext(this.language);

    /**
     * 
     */
    private commandsBag: GLS.Commands.CommandsBag = new GLS.Commands.CommandsBag(this.conversionContext);

    /**
     * 
     */
    private commands: { [i: string]: GLS.Commands.Command } = this.commandsBag.getCommands();

    /**
     * 
     */
    public state: ICommandsListState = { 
        filter: ""
    };

    /**
     * Renders the component.
     * 
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <div className="commands-list">
                {this.renderHeader()}
                {this.renderCommands()}
            </div>);
    }

    /**
     * 
     */
    private renderHeader(): JSX.Element {
        return (
            <div className="commands-header">
                <input
                    onChange={event => this.onFilterChange(event)}
                    placeholder="filter commands"
                    type="text" />
                <h2>Available commands</h2>
            </div>);
    }

    /**
     * 
     */
    private renderCommands(): JSX.Element[] {
        return Object.keys(this.commands)
            .filter(key => !this.state.filter || key.toLowerCase().indexOf(this.state.filter) !== -1)
            .map(key => <CommandComponent
                command={this.commands[key]}
                key={key}
                name={key} />);
    }

    /**
     * 
     */
    private onFilterChange(event: React.FormEvent): void {
        this.setState({
            filter: (event.target as HTMLInputElement).value.toLowerCase()
        })
    }
}
