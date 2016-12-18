import { observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";

import { Samples } from "../../samples";
import { IAppProps } from "../app";
import { MonacoTextArea } from "../monacotextarea";
import { DropdownTextMenu } from "./dropdowntextmenu";

/**
 * Component for a GLS text area.
 */
@observer
export class GlsTextArea extends React.Component<IAppProps, void> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <MonacoTextArea
                defaultValue={this.props.app.sourceLines.join("\n")}
                language="none"
                onChange={event => this.receiveNewValue(event)} />);
    }

    /**
     * Receives a new source lines value.
     * 
     * @param value   The new value.
     */
    private receiveNewValue(value: string): void {
        this.props.app.sourceLines = observable(value.trim().split("\n"));
        this.props.app.usingSample = false;
    }
}
