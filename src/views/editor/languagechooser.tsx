import { Gls } from "general-language-syntax";
import { observer } from "mobx-react";
import * as React from "react";

import { DropdownTextMenu } from "./dropdowntextmenu";
import { IAppProps } from "../app";

/**
 * Component for a language chooser.
 */
@observer
export class LanguageChooser extends React.Component<IAppProps, void> {
    /**
     * All available GLS language names.
     */
    private static languageNames: string[] = new Gls().getLanguagesBag().getLanguageNames();

    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <DropdownTextMenu
                defaultValue={this.props.app.language}
                onChange={this.onChange}
                options={LanguageChooser.languageNames} />);
    }

    /**
     * Handles a new value from the text menu.
     * 
     * @param sampleName   A new sample name from the text menu.
     */
    private onChange = (language: string): void => {
        this.props.app.language = language;
    };
}
