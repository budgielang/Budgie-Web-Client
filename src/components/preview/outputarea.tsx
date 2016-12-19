import { ConversionContext } from "general-language-syntax/dist/amd/Conversions/ConversionContext";
import { observer } from "mobx-react";
import * as React from "react";

import { MonacoTextArea } from "../shared/monacotextarea";
import { OutputAreaStore } from "./outputareastore";

/**
 * Props for a OutputArea component.
 */
export interface IProps {
    /**
     * Store for a OutputArea component.
     */
    store: OutputAreaStore;
}

/**
 * Component for converting GLS syntax to an output language.
 */
@observer
export class OutputArea extends React.Component<IProps, void> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <div className="gls-output-area">
                {this.renderErrorBar(this.props.store.conversionResult.error)}
                {this.renderOutputLines(this.props.store.conversionResult.outputLines)}
            </div>);
    }

    /**
     * Renders the error bar above the text.
     * 
     * @param error   An error to display in the bar.
     * @returns The rendered error bar.
     */
    private renderErrorBar(error: string = ""): JSX.Element {
        return (
            <div className={`preview-error-bar error-bar-${error ? "full" : "empty"}`}>
                {error}
            </div>);
    }

    /**
     * Renders the output lines of code.
     * 
     * @param outputLines   Output lines of code.
     * @returns The rendered output lines.
     */
    private renderOutputLines(outputLines: string[]): JSX.Element {
        return (
            <MonacoTextArea
                language={this.props.store.optionsBar.language.toLowerCase()}
                options={{
                    readOnly: true,
                    // scrollBeyondLastLine: false
                }}
                value={outputLines.join("\n")} />);
    }
}
