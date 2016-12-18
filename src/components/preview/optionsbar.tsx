import { observer } from "mobx-react";
import * as React from "react";

import { LanguageChooser } from "./languagechooser";
import { SampleChooser } from "./samplechooser";
import { OptionsBarStore } from "./optionsbarstore";

/**
 * Props for an OptionsBar component.
 */
export interface IProps {
    /**
     * Store for the options bar component.
     */
    store: OptionsBarStore;
}

/**
 * Component for an options bar.
 */
@observer
export class OptionsBar extends React.Component<IProps, void> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <div className="options-bar">
                <label>Choose a language:</label>
                <LanguageChooser
                    language={this.props.store.language}
                    onChange={this.props.store.setLanguage} />
                <SampleChooser
                    sample={this.props.store.sample}
                    onChange={this.props.store.setSample} />
            </div>);
    }
}
