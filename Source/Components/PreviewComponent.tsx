/// <reference path="../../typings/browser/ambient/highlightjs/index.d.ts" />
/// <reference path="../../typings/browser/ambient/react/index.d.ts" />
/// <reference path="../../References/GLS.d.ts" />

import * as Highlight from "highlight.js";
import * as React from "react";
import * as ReactDOM from "react-dom";

/**
 * Properties for an PreviewComponent.
 */
interface IPreviewComponentProps {
    /**
     * Which language to convert GLS syntax into.
     */
    languageName: string;

    /**
     * Raw lines of GLS source code to render.
     */
    sourceLines: string[];
}

/**
 * State for an PreviewComponent.
 */
interface IPreviewComponentState {
    /**
     * The driving GLS context to produce output code.
     */
    conversionContext: GLS.ConversionContext;

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
export default class PreviewComponent extends React.Component<IPreviewComponentProps, IPreviewComponentState> {
    /**
     * Languages keyed by their friendly names.
     * 
     * @todo Embed this dictionary into GLS itself.
     */
    private static Languages: { [i: string]: GLS.Languages.Language } = {
        CSharp: new GLS.Languages.CSharp(),
        Java: new GLS.Languages.Java(),
        Python: new GLS.Languages.Python(),
        Ruby: new GLS.Languages.Ruby(),
        TypeScript: new GLS.Languages.TypeScript()
    };

    /**
     * Initializes a new instance of the PreviewComponent class.
     * 
     * @param props   Properties for the component.
     * @param context
     */
    constructor(props: IPreviewComponentProps, context?: any) {
        super(props, context);

        this.state = {
            conversionContext: this.createNewConversionContext(props.languageName),
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
            <div className="component preview-component highlight">
                {this.renderErrorBar(this.state.error)}
                {this.renderOutputLines(this.state.outputLines)}
            </div>);
    }

    /**
     * Highlights code in the DOM node using highlightjs.
     */
    private highlightCode(): void {
        hljs.highlightBlock(ReactDOM.findDOMNode(this).querySelector("code"));
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
            <pre>
                <code className={`language-${this.props.languageName.toLowerCase()}`}>
                    {outputLines.join("\n")}
                </code>
            </pre>);
    }

    /**
     * Handler for receiving new props.
     * 
     * @param nextProps   Incoming new props.
     */
    private componentWillReceiveProps(nextProps: IPreviewComponentProps): void {
        this.setState(this.generateStateFromProps(nextProps));
    }

    /**
     * Handler to highlight code when the component mounts.
     */
    private componentDidMount(): void {
        this.highlightCode();
    }

    /**
     * Handler to highlight code whenthe component unmounts.
     */
    private componentDidUpdate(): void {
        this.highlightCode();
    }

    /**
     * Generates a new state from props, converting GLS syntax if possible.
     * 
     * @param props   Properties for the component.
     * @returns A new state from the props.
     */
    private generateStateFromProps(props: IPreviewComponentProps): IPreviewComponentState {
        let state: IPreviewComponentState = {
            conversionContext: this.state.conversionContext,
            error: "",
            outputLines: this.state.outputLines
        };

        if (props.languageName !== this.props.languageName) {
            state.conversionContext = this.createNewConversionContext(props.languageName);
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
     * @param languageName   The name of the language.
     * @returns A new GLS conversion context for the language.
     */
    private createNewConversionContext(languageName: string): GLS.ConversionContext {
        return new GLS.ConversionContext(PreviewComponent.Languages[languageName]);
    }
}
