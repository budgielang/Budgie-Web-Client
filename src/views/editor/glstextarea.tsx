import { observer } from "mobx-react";
import * as React from "react";

import { Samples } from "../../samples";
import { MonacoTextArea } from "../monacotextarea";
import { DropdownTextMenu } from "./dropdowntextmenu";

/**
 * Properties for a GlsTextArea component.
 */
export interface IProps {
    /**
     * Raw lines of GLS syntax.
     */
    sourceLines: string[];
}

/**
 * Component for a GLS text area.
 */
@observer
export class GlsTextArea extends React.Component<IProps, void> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        console.log("initial source lines", this.props.sourceLines);
        return (
            <MonacoTextArea
                defaultValue={this.props.sourceLines.join("\n")}
                language="none"
                onChange={event => this.receiveNewValue(event)} />);
    }

    /**
     * Receives a new source lines value.
     * 
     * @param value   The new value.
     */
    private receiveNewValue(value: string): void {
        console.log("Got", value.split("\n"));
    }
}
