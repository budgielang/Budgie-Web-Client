/// <reference path="../../typings/browser/ambient/react/index.d.ts" />

import * as React from "react";

import { CommandsListComponent } from "./Commands/CommandsListComponent";
import { MonacoComponent } from "./MonacoComponent";

/**
 * Properties for an EditorComponent.
 */
export interface IEditorComponentProps {
    /**
     * The initial starting text value for the editor.
     */
    defaultValue: string;

    /**
     * Handler for when the value changes. 
     */
    onChange: (newValue: string[]) => void;
}

/**
 * State for an EditorComponent.
 */
interface IEditorComponentState { }

/**
 * A real-time GLS editor component.
 */
export default class EditorComponent extends React.Component<IEditorComponentProps, IEditorComponentState> {
    /**
     * Renders the component.
     * 
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <div className="component editor-component">
                <MonacoComponent
                    defaultValue={this.props.defaultValue}
                    language="none"
                    onChange={event => this.receiveNewValue(event)} />
                {this.renderCommandsList()}
            </div>);
    }

    /**
     * Renders the command list.
     * 
     * @returns The rendered command list.
     */
    private renderCommandsList(): JSX.Element {
        return <CommandsListComponent />;
    }

    /**
     * Intercepts a textarea change event and passes it, with its split lines,
     * to props.
     * 
     * @param value   The new value.
     */
    private receiveNewValue(value: string): void {
        this.props.onChange(value.trim().split("\n"));
    }
}
