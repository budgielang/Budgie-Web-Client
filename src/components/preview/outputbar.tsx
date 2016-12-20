import { observer } from "mobx-react";
import * as React from "react";

import { LanguageChooser } from "./languagechooser";
import { OutputBarStore } from "./outputbarstore";

/**
 * Props for an OutputBar component.
 */
export interface IProps {
    /**
     * Store for the output bar component.
     */
    store: OutputBarStore;
}

/**
 * Component for an output bar.
 */
@observer
export class OutputBar extends React.Component<IProps, void> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <div className="options-bar output-bar">
                <div className="sub-bar">
                    <label>Choose a language:</label>
                    <LanguageChooser
                        language={this.props.store.language}
                        onChange={this.props.store.setLanguage} />
                </div>
            </div>);
    }
}
