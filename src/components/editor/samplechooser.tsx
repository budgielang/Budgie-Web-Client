import { Gls } from "general-language-syntax";
import { observer } from "mobx-react";
import * as React from "react";

import { DropdownTextMenu } from "../shared/dropdowntextmenu";
import { Samples } from "../../samples";

/**
 * Props for a Sample component.
 */
export interface IProps {
    /**
     * Current sample name.
     */
    sample: string;

    /**
     * Handler for a new sample.
     */
    onChange(sample: string): void;
}

/**
 * Component for a sample chooser.
 */
@observer
export class SampleChooser extends React.Component<IProps, void> {
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
                defaultValue={this.props.sample}
                onChange={this.onChange}
                options={SampleChooser.sampleKeys} />);
    }

    /**
     * Handles a new value from the text menu.
     * 
     * @param sampleName   A new sample name from the text menu.
     */
    private readonly onChange = (language: string): void => this.props.onChange(language);
}
