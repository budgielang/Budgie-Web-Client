import { observer } from "mobx-react";
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
@observer
export class CommandsList extends React.Component<IProps, void> {
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
        return Object.keys(this.props.store.commands)
            .filter((key: string): boolean => key.toLowerCase().indexOf(this.props.store.filter) !== -1)
            .map((key: string): JSX.Element => (
                <Command
                    command={this.props.store.commands[key]}
                    key={key}
                    name={key} />));
    }
}
