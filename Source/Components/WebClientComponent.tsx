/// <reference path="../../typings/browser/ambient/react/index.d.ts" />

import * as React from "react";

import EditorComponent from "./EditorComponent";
import PreviewComponent from "./PreviewComponent";
import Samples from "../Samples";

/**
 * Properties for a WebClientComponent.
 */
interface IWebClientComponentProps { }

/**
 * State for a WebClientComponent.
 */
interface IWebClientComponentState {
    /**
     * Which language to convert GLS syntax into.
     */
    outputLanguage: string;

    /**
     * The most recently selected sample code.
     */
    sampleName: string;

    /**
     * The current editor session.
     */
    sessionId: number;

    /**
     * Raw lines of GLS syntax from the editor component.
     */
    sourceLines: string[];
 }

/**
 * A parent container component for a real-time GLS editor.
 */
export default class WebClientComponent extends React.Component<IWebClientComponentProps, IWebClientComponentState> {
    /**
     * The default state for the component.
     */
    private static DefaultState: IWebClientComponentState = {
        outputLanguage: "CSharp",
        sampleName: "Default",
        sessionId: performance.now(),
        sourceLines: Samples.Default
    };

    /**
     * A key to store state under in local storage.
     */
    private static StateLocalStorageKey: string = "GLS::WebClient::State";

    /**
     * 
     */
    private static SampleKeys: string[] = Object.keys(Samples);

    /**
     * The current internal state of the component.
     */
    public state: IWebClientComponentState = this.retrieveInitialState();

    /**
     * Whether local storage appears to be working.
     */
    private localStorageWorks: boolean;

    /**
     * Renders the component.
     * 
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <div id="WebClient">
                <section id="EditorSection">
                    {this.renderOptions()}
                    <EditorComponent
                        defaultValue={this.state.sourceLines.join("\n")}
                        key={this.state.sessionId}
                        onChange={newValue => this.receiveNewEditorValue(newValue)} />
                </section>
                <section id="PreviewSection">
                    <select 
                        className="preview-language-selector" 
                        value={this.state.outputLanguage}
                        onChange={event => this.receiveNewOutputLanguage(event)}>
                        <option value="CSharp">CSharp</option>
                        <option value="Python">Python</option>
                        <option value="Ruby">Ruby</option>
                        <option value="TypeScript">TypeScript</option>
                    </select>
                    <PreviewComponent
                        languageName={this.state.outputLanguage}
                        sourceLines={this.state.sourceLines} />
                </section>
            </div>);
    }

    /**
     * Renders the options section.
     * 
     * @returns The rendered options section.
     */
    private renderOptions(): JSX.Element {
        return (
            <div className="option-buttons">
                <label>Select a sample:</label>
                {this.renderSamplesSelect()}
                <input onClick={() => this.reset()} type="button" value="reset" />
            </div>);
    }

    /**
     * 
     */
    private renderSamplesSelect(): JSX.Element {
        return (
            <select
                defaultValue={this.state.sampleName}
                onChange={event => this.reset((event.target as HTMLSelectElement).value)}>
                {WebClientComponent.SampleKeys.map(sampleName => <option value={sampleName}>{sampleName}</option>)}
            </select>);
    }

    /**
     * Resets state for sample code.
     * 
     * @param sampleName   The name of the sample to use (by default, the current one).
     */
    private reset(sampleName: string = this.state.sampleName): void {
        this.setState(
            {
                outputLanguage: this.state.outputLanguage,
                sampleName: sampleName,
                sessionId: performance.now(),
                sourceLines: sampleName ? Samples[sampleName] : this.state.sourceLines
            },
            () => this.receiveNewEditorValue(this.state.sourceLines));
    }

    /**
     * Receives a new set of GLS syntax source from the editor.
     * 
     * @param sourceLines   The new source lines of GLS syntax.
     */
    private receiveNewEditorValue(sourceLines: string[]): void {
        this.saveState({ sourceLines } as any);
    }

    /**
     * Receives a new output language name from options.
     * 
     * @param event   The triggering event.
     */
    private receiveNewOutputLanguage(event: React.FormEvent): void {
        let outputLanguage: string = (event.target as HTMLSelectElement).value;

        this.saveState({ outputLanguage } as any);
    }

    /**
     * Retrieves saved component state from storage, or the default if unavailable. 
     * 
     * @returns An initial component state.
     */
    private retrieveInitialState(): IWebClientComponentState {
        let state: IWebClientComponentState = WebClientComponent.DefaultState;

        try {
            let stored = localStorage[WebClientComponent.StateLocalStorageKey];
            if (stored) {
                state = JSON.parse(stored);
            }
            this.localStorageWorks = true;
        } catch (error) {
            console.error("Your browser doesn't seem to support localStorage. What gives?");
            console.error(error);
            this.localStorageWorks = false;
        }

        return state;
    }

    /**
     * Sets a new state and saves it to local storage.
     * 
     * @param state   A new state for the component.
     */
    private saveState(state: IWebClientComponentState): void {
        this.setState(
            state,
            () => localStorage[WebClientComponent.StateLocalStorageKey] = JSON.stringify(this.state));
    }
}
