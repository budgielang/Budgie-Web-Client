import { observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";

import { MonacoTextArea } from "../shared/monacotextarea";
import { InputAreaStore } from "./InputAreastore";

/**
 * Props for an InputArea component.
 */
export interface IProps {
    /**
     * Store for the InputArea component.
     */
    store: InputAreaStore;
}

/**
 * Component for a GLS input area.
 */
@observer
export class InputArea extends React.Component<IProps, void> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <MonacoTextArea
                language="gls"
                onChange={this.receiveNewValue}
                options={{
                    scrollBeyondLastLine: false
                }}
                value={this.props.store.source} />);
    }

    /**
     * Receives a new source lines value.
     * 
     * @param value   The new value.
     */
    private receiveNewValue = (value: string): void => this.props.store.setSource(value);
}
