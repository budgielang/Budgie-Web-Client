import { observer } from "mobx-react";
import * as React from "react";

import { CommandsList } from "./editor/commands/commandslist";
import { InputArea } from "./editor/inputarea";
import { InputBar } from "./editor/inputbar";
import { EditorStore } from "./editorstore";

/**
 * Props for an Editor component.
 */
export interface IProps {
    /**
     * Store for an Editor component.
     */
    store: EditorStore;
}

/**
 * Component for an editor.
 * 
 * @param props   Props for the component.
 * @returns The rendered component.
 */
@observer
export class Editor extends React.Component<IProps, void> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <section className="editor">
                <div className="component">
                    <InputArea store={this.props.store.inputArea} />
                    <CommandsList store={this.props.store.commandsList} />
                    <InputBar store={this.props.store.inputBar} />
                </div>
            </section>);
    }
}
