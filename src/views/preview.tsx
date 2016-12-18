import { observer } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { ConversionContext } from "general-language-syntax/dist/amd/Conversions/ConversionContext";
import { Language } from "general-language-syntax/dist/amd/Languages/Language";
import { LanguagesBag } from "general-language-syntax/dist/amd/Languages/LanguagesBag";

import { MonacoTextArea } from "./monacotextarea";

/**
 * Properties for a Preview component.
 */
interface IProps {
    /**
     * Which language to convert GLS syntax into.
     */
    outputLanguage: string;

    /**
     * Raw lines of GLS source code to render.
     */
    sourceLines: string[];
}

/**
 * State for a Preview component.
 */
interface IState {
    /**
     * The driving GLS context to produce output code.
     */
    conversionContext: ConversionContext;

    /**
     * Any error that occured while converting.
     */
    error: string;

    /**
     * Output lines of code from the conversion context.
     */
    outputLines: string[];
}

/**
 * A real-time GLS Preview component.
 */
@observer
export class Preview extends React.Component<IProps, IState> {
    /**
     * Languages keyed by their friendly names.
     * 
     * @todo Embed this dictionary into GLS itself.
     */
    private static languagesBag: LanguagesBag = new LanguagesBag();

    /**
     * Initializes a new instance of the Preview class.
     * 
     * @param props   Properties for the component.
     * @param context
     */
    constructor(props: IProps, context?: any) {
        super(props, context);

        this.state = {
            conversionContext: this.createNewConversionContext(props.outputLanguage),
            error: "",
            outputLines: []
        };
        this.state = this.generateStateFromProps(props);
    }

    /**
     * Renders the component.
     * 
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <section className="preview">
                {this.renderErrorBar(this.state.error)}
                {this.renderOutputLines(this.state.outputLines)}
            </section>);
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
                language={this.props.outputLanguage.toLowerCase()}
                options={{
                    readOnly: true,
                    scrollBeyondLastLine: false
                }}
                value={outputLines.join("\n")} />);
    }

    /**
     * Handler for receiving new props.
     * 
     * @param nextProps   Incoming new props.
     */
    private componentWillReceiveProps(nextProps: IProps): void {
        this.setState(this.generateStateFromProps(nextProps));
    }

    /**
     * Generates a new state from props, converting GLS syntax if possible.
     * 
     * @param props   Properties for the component.
     * @returns A new state from the props.
     */
    private generateStateFromProps(props: IProps): IState {
        const state: IState = {
            conversionContext: this.state.conversionContext,
            error: "",
            outputLines: this.state.outputLines
        };

        if (props.outputLanguage !== this.props.outputLanguage) {
            state.conversionContext = this.createNewConversionContext(props.outputLanguage);
        }

        try {
            state.outputLines = state.conversionContext.convert(props.sourceLines);
        } catch (error) {
            state.error = error.toString();
        }

        return state;
    }

    /**
     * Creates a new GLS conversion context for a language.
     * 
     * @param language   The name of the language.
     * @returns A new GLS conversion context for the language.
     */
    private createNewConversionContext(language: string): ConversionContext {
        return new ConversionContext(Preview.languagesBag.getLanguage(language));
    }
}
