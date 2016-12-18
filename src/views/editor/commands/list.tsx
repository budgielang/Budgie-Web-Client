import { Command } from "general-language-syntax/dist/amd/Commands/Command";
import { CommandsBag } from "general-language-syntax/dist/amd/Commands/CommandsBag";
import { ConversionContext } from "general-language-syntax/dist/amd/Conversions/ConversionContext";
import { TypeScript } from "general-language-syntax/dist/amd/Languages/TypeScript";
import { observer } from "mobx-react";
import * as React from "react";

import { CommandView } from "./commandview";

/**
 * Properties for a List component.
 */
export interface IProps { }

/**
 * State for a List component.
 */
export interface IState {
    /**
     * A user-given filter on which commands to show. 
     */
    filter: string;
}

/**
 * Component for a filterable list of GLS commands.
 */
@observer
export class List extends React.Component<IProps, IState> {
    /**
     * Commands to be listed.
     */
    private commands: { [i: string]: Command } = List.getCommands();

    /**
     * State for the component.
     */
    public state: IState = {
        filter: ""
    };

    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <div className="commands-list">
                <input
                    onChange={this.onChange}
                    placeholder="filter commands"
                    type="text" />
                <h1>Available Commands</h1>
                {this.renderCommands()}
            </div>);
    }

    /**
     * @returns The rendered command components.
     */
    private renderCommands(): JSX.Element[] {
        return Object.keys(this.commands)
            .filter((key: string): boolean => !this.state.filter || key.toLowerCase().indexOf(this.state.filter) !== -1)
            .map((key: string): JSX.Element => (
                <CommandView
                    command={this.commands[key]}
                    key={key}
                    name={key} />));
    }

    /**
     * Handles the filter input giving a new filter.
     * 
     * @param event   The triggering event.
     */
    private onChange = (event: React.FormEvent<HTMLInputElement>): void => {
        this.setState({
            filter: event.currentTarget.value
        });
    }

    /**
     * @returns All available commands.
     */
    private static getCommands(): { [i: string]: Command } {
        const conversionContext: ConversionContext = new ConversionContext(new TypeScript());
        const commandsBag: CommandsBag = new CommandsBag(conversionContext);

        return commandsBag.getCommands();
    }
}
