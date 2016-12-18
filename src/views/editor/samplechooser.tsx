import { Gls } from "general-language-syntax";
import { observer } from "mobx-react";
import * as React from "react";

import { Samples } from "../../samples";
import { DropdownTextMenu } from "./dropdowntextmenu";

/**
 * Properties for a SampleChooser component.
 */
export interface IProps {
    /**
     * Which sample to convert GLS syntax into.
     */
    sample: string;
}

/**
 * Component for a Sample chooser.
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
                defaultValue={SampleChooser.sampleKeys[0]}
                options={SampleChooser.sampleKeys} />);
    }
}
