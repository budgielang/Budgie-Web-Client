import { Gls } from "general-language-syntax";
import { observer } from "mobx-react";
import * as React from "react";

import { DropdownTextMenu } from "../shared/dropdowntextmenu";

/**
 * Props for a LanguageChooser component.
 */
export interface IProps {
    /**
     * Current language name.
     */
    language: string;

    /**
     * Handler for a new language.
     */
    onChange(language: string): void;
}

/**
 * Component for a language chooser.
 */
@observer
export class LanguageChooser extends React.Component<IProps, void> {
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
                defaultValue={this.props.language}
                onChange={this.onChange}
                options={LanguageChooser.languageNames} />);
    }

    /**
     * Handles a new value from the text menu.
     * 
     * @param sampleName   A new sample name from the text menu.
     */
    private readonly onChange = (language: string): void => this.props.onChange(language);
}
