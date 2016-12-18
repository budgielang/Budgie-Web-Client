import { observer } from "mobx-react";
import * as React from "react";

import { IAppProps } from "../app";
import { LanguageChooser } from "./languagechooser";
import { SampleChooser } from "./samplechooser";

/**
 * Component for an editor options bar.
 */
@observer
export class OptionsBar extends React.Component<IAppProps, void> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <div className="options-bar">
                <label>Choose a language:</label>
                <LanguageChooser app={this.props.app} />
                <SampleChooser app={this.props.app} />
            </div>);
    }
}
