import { Command as GlsCommand } from "general-language-syntax/dist/amd/Commands/Command";
import { CommandsBag } from "general-language-syntax/dist/amd/Commands/CommandsBag";
import { ConversionContext } from "general-language-syntax/dist/amd/Conversions/ConversionContext";
import { TypeScript } from "general-language-syntax/dist/amd/Languages/TypeScript";
import * as React from "react";

import { Command } from "./command";
import { CommandsListStore } from "./commandsliststore";

/**
 * Properties for a CommandsList component.
 */
export interface IProps {
    /**
     * Store for a CommandsList component.
     */
    store: CommandsListStore;
}

/**
 * Component for a filterable list of GLS commands.
 */
export class CommandsList extends React.Component<IProps, void> {
    /**
     * Commands to be listed.
     */
    private commands: { [i: string]: GlsCommand } = CommandsList.getCommands();

    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <div className="commands-list">
                <h1>Available Commands</h1>
                {this.renderCommands()}
            </div>);
    }

    /**
     * @returns The rendered command components.
     */
    private renderCommands(): JSX.Element[] {
        return Object.keys(this.commands)
            .filter((key: string): boolean => key.toLowerCase().indexOf(this.props.store.filter) !== -1)
            .map((key: string): JSX.Element => (
                <Command
                    command={this.commands[key]}
                    key={key}
                    name={key} />));
    }

    /**
     * @returns All available commands.
     */
    private static getCommands(): { [i: string]: GlsCommand } {
        const conversionContext: ConversionContext = new ConversionContext(new TypeScript());
        const commandsBag: CommandsBag = new CommandsBag(conversionContext);

        return commandsBag.getCommands();
    }
}
