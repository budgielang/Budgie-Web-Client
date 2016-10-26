/// <reference path="../../typings/browser/ambient/react/index.d.ts" />
/// <reference path="../../typings/browser/ambient/react-dom/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import { ConversionContext } from "gls/src/Conversions/ConversionContext";
import { Language } from "gls/src/Languages/Language";
import { CSharp } from "gls/src/Languages/CSharp";
import { Java } from "gls/src/Languages/Java";
import { Python } from "gls/src/Languages/Python";
import { Ruby } from "gls/src/Languages/Ruby";
import { TypeScript } from "gls/src/Languages/TypeScript";

import { MonacoComponent } from "./MonacoComponent";

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
export default class PreviewComponent extends React.Component<IPreviewComponentProps, IPreviewComponentState> {
    /**
     * Languages keyed by their friendly names.
     * 
     * @todo Embed this dictionary into GLS itself.
     */
    private static Languages: { [i: string]: Language } = {
        CSharp: new CSharp(),
        Java: new Java(),
        Python: new Python(),
        Ruby: new Ruby(),
        TypeScript: new TypeScript()
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
            <div className="component preview-component">
                {this.renderErrorBar(this.state.error)}
                {this.renderOutputLines(this.state.outputLines)}
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
            <MonacoComponent
                value={outputLines.join("\n")}
                language={this.props.languageName.toLowerCase()} />);
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
    private createNewConversionContext(languageName: string): ConversionContext {
        return new ConversionContext(PreviewComponent.Languages[languageName]);
    }
}
