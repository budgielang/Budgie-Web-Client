import { Gls } from "general-language-syntax";
import { observer } from "mobx-react";
import * as React from "react";

import { DropdownTextMenu } from "./dropdowntextmenu";

/**
 * Properties for a LanguageChooser component.
 */
export interface IProps {
    /**
     * Which language to convert GLS syntax into.
     */
    language: string;
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
                options={LanguageChooser.languageNames} />);
    }
}
