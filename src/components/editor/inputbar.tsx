import { observer } from "mobx-react";
import * as React from "react";

import { SampleChooser } from "./samplechooser";
import { InputBarStore } from "./inputbarstore";

/**
 * Props for an OptionsBar component.
 */
export interface IProps {
    /**
     * Store for the options bar component.
     */
    store: InputBarStore;
}

/**
 * Component for an input bar.
 */
@observer
export class InputBar extends React.Component<IProps, void> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <div className="options-bar input-bar">
                <input
                    className="commands-filter"
                    onChange={this.onFilterChange}
                    placeholder="filter commands"
                    type="text" />
                <label>Choose a sample:</label>
                <SampleChooser
                    sample={this.props.store.sample}
                    onChange={this.props.store.setSample} />
            </div>);
    }

    /**
     * Handles the filter input giving a new filter.
     * 
     * @param event   The triggering event.
     */
    private onFilterChange(event: React.FormEvent<HTMLInputElement>): void {
        this.props.store.commandsList.setFilter(event.currentTarget.value);
    }
}
