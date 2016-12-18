import { observer } from "mobx-react";
import * as React from "react";

import { IAppState } from "../../state/appstate";
import { LanguageChooser } from "./languagechooser";
import { SampleChooser } from "./samplechooser";

/**
 * Properties for an OptionsBar component.
 */
export interface IProps {
    /**
     * Which language to convert GLS syntax into.
     */
    outputLanguage: string;

    /**
     * The most recently selected sample code.
     */
    sampleName: string;
}

/**
 * Component for an editor options bar.
 */
@observer
export class OptionsBar extends React.Component<IProps, void> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <div className="options-bar">
                <LanguageChooser language={this.props.outputLanguage} />
                <SampleChooser sample={this.props.sampleName} />
            </div>);
    }
}
