/// <reference path="../../typings/browser/ambient/react/index.d.ts" />

import * as React from "react";

import { CommandsListComponent } from "./Commands/CommandsListComponent";

/**
 * Properties for an EditorComponent.
 */
interface IEditorComponentProps {
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
                <textarea
                    className="editor-textarea"
                    defaultValue={this.props.defaultValue}
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
     * @param event   The triggering event.
     */
    private receiveNewValue(event: React.FormEvent): void {
        this.props.onChange((event.target as HTMLTextAreaElement).value.trim().split("\n"));
        event.stopPropagation();
    }
}
