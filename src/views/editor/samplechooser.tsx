import { Gls } from "general-language-syntax";
import { observer } from "mobx-react";
import * as React from "react";

import { Samples } from "../../samples";
import { IAppProps } from "../app";
import { DropdownTextMenu } from "./dropdowntextmenu";

/**
 * Component for a Sample chooser.
 */
@observer
export class SampleChooser extends React.Component<IAppProps, void> {
    /**
     * Names of the available samples.
     */
    private static sampleKeys: string[] = Object.keys(Samples);

    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <DropdownTextMenu
                defaultValue={SampleChooser.sampleKeys[0]}
                onChange={this.onChange}
                options={SampleChooser.sampleKeys} />);
    }

    /**
     * Handles a new value from the text menu.
     * 
     * @param sampleName   A new sample name from the text menu.
     */
    private onChange = (sampleName: keyof typeof Samples): void => {
        this.props.app.sampleName = sampleName;
        this.props.app.sourceLines = Samples[sampleName];
    };
}
