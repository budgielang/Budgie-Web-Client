/// <reference path="../../typings/browser/ambient/react/index.d.ts" />

declare var monaco: any;

import * as React from "react";

/**
 * Properties for a Monaco editor component.
 */
export interface IMonacoComponentProps {
    /**
     * 
     */
    defaultValue?: string;

    /**
     * 
     */
    editorDidMount?: Function;

    /**
     * 
     */
    editorWillMount?: Function;

    /**
     * 
     */
    height?: number | string;

    /**
     * 
     */
    language?: string;

    /**
     * 
     */
    options?: any;

    /**
     * 
     */
    onChange?: Function;

    /**
     * 
     */
    theme?: string;

    /**
     * 
     */
    width?: number | string;

    /**
     * 
     */
    value?: string;
}

/**
 * 
 */
interface IMonacoComponentState {
    /**
     * 
     */
    currentValue?: string;

    /**
     * 
     */
    loading?: boolean;
}

/**
 * 
 */
export class MonacoComponent extends React.Component<IMonacoComponentProps, IMonacoComponentState> {
    /**
     * Default properties for the component.
     */
    private static defaultProps: IMonacoComponentProps = {
        width: "100%",
        height: "100%",
        value: null,
        defaultValue: "",
        language: "javascript",
        theme: "vs",
        options: {},
        editorDidMount: (): void => {},
        editorWillMount: (): void => {},
        onChange: (): void => {}
    };

    /**
     * 
     */
    private preventTriggerChangeEvent: boolean;

    /**
     * 
     */
    private editor: any;

    /**
     * Initializes a new instance of the MonacoComponent class.
     * 
     * @param props   Properties for the component.
     */
    public constructor(props: IMonacoComponentProps) {
        super(props);

        this.state = {
            loading: true,
            currentValue: props.value
        };
    }

    /**
     * Renders the component.
     * 
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return this.state.loading
            ? this.renderLoading()
            : this.renderLoaded();
    }

    /**
     * 
     */
    public renderLoading(): JSX.Element {
        return (
            <div
                className="react-monaco-editor-container monaco-loading"
                ref="container"
                style={{width: "100%", height: "100%" }}>
                <span>loading editor...</span>
            </div>);
    }

    /**
     * 
     */
    public renderLoaded(): JSX.Element {
        return (
            <div
                className= "react-monaco-editor-container"
                ref="container"
                style={{width: "100%", height: "100%" }}>
            </div>);
    }

    /**
     * Trigger when the component mounts.
     */
    public componentDidMount() {
        this.afterViewInit();
        window.addEventListener("resize", this.updateDimensions);
    }

    /**
     * Trigger when the component is about to unmount.
     */
    public componentWillUnmount() {
        this.destroyMonaco();
        window.removeEventListener("resize", this.updateDimensions);
    }

    /**
     * Trigger when the component is about to update.
     * 
     * @param nextProps   A new set of properties.
     */
    public componentWillUpdate(nextProps: IMonacoComponentProps): void {
        if (nextProps.language !== this.props.language) {
            this.destroyMonaco();
            this.initializeMonaco(nextProps);
            return;
        }

        if (nextProps.value === this.state.currentValue) {
            return;
        }

        this.preventTriggerChangeEvent = true;
        this.editor.setValue(nextProps.value);
        this.preventTriggerChangeEvent = false;
    }

    /**
     * Trigger when the editor is about to mount.
     */
    private editorWillMount(monaco) {
        this.props.editorWillMount(monaco);
    }

    /**
     * Trigger when the editor mounted.
     */
    private editorDidMount(editor, monaco) {
        this.setState({
            loading: false
        });
        this.props.editorDidMount(editor, monaco);

        editor.onDidChangeModelContent((event: any): void => {
            const value = editor.getValue();

            // Only invoke onChange when user input changed
            if (!this.preventTriggerChangeEvent) {
                this.props.onChange(value, event);
            }

            // Always refer to the latest value
            this.setState({
                currentValue: value
            });
        });
    }

    /**
     * 
     */
    private afterViewInit() {
        (window as any).require(["vs/editor/editor.main"], () => {
            this.initializeMonaco();
        });
    }

    /**
     * 
     */
    private initializeMonaco(props: IMonacoComponentProps = this.props) {
        const value = props.value || props.defaultValue;
        const { language, theme, options } = props;

        if (typeof monaco === "undefined") {
            throw new Error("Monaco failed to load.");
        }

        // Before initializing monaco editor
        this.editorWillMount(monaco);

        this.editor = monaco.editor.create(
            (this.refs as any).container,
            (Object as any).assign(
                { value, language, theme },
                options));

        // After initializing monaco editor
        this.editorDidMount(this.editor, monaco);
    }

    /**
     * Disposes of the editor.
     */
    private destroyMonaco() {
        if (typeof this.editor === "undefined") {
            return;
        }

        this.editor.dispose();
        (this.refs as any).container.innerHTML = "";
    }

    /**
     * Reacts to a window resize by re-computing the editor layout.
     */
    private updateDimensions = (): void => {
        this.editor.layout();
    };
}
