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
export class MonacoComponent extends React.Component<IMonacoComponentProps, any> {
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
    private currentValue: string;

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

        this.currentValue = props.value;
    }

    /**
     * Renders the component.
     * 
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        const { width, height } = this.props;
        const fixedWidth = width.toString().indexOf("%") !== -1 ? width : `${width}px`;
        const fixedHeight = height.toString().indexOf("%") !== -1 ? height : `${height}px`;
        const style = {
            width: fixedWidth,
            height: fixedHeight,
        };

        return (
            <div ref="container" style={style} className="react-monaco-editor-container"></div>);
    }

    /**
     * Trigger when the component mounts.
     */
    public componentDidMount() {
        this.afterViewInit();
    }

    /**
     * Trigger when the component is about to unmount.
     */
    public componentWillUnmount() {
        this.destroyMonaco();
    }

    /**
     * Trigger when the component is about to update.
     * 
     * @param nextProps   A new set of properties.
     */
    public componentWillUpdate(nextProps: IMonacoComponentProps): void {
        if (nextProps.value === this.currentValue) {
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
        const { onChange } = this.props;

        this.props.editorDidMount(editor, monaco);
        editor.onDidChangeModelContent(event => {
            const value = editor.getValue();
            // Only invoking when user input changed
            if (!this.preventTriggerChangeEvent) {
                onChange(value, event);
            }
            // Always refer to the latest value
            this.currentValue = value;
        });
    }

    private afterViewInit() {
        (window as any).require(["vs/editor/editor.main"], () => {
            this.initializeMonaco();
        });
    }

    private initializeMonaco() {
        const value = this.props.value !== null ? this.props.value : this.props.defaultValue;
        const { language, theme, options } = this.props;
        const containerElement = (this.refs as any).container;

        if (typeof monaco === "undefined") {
            return;
        }

        // Before initializing monaco editor
        this.editorWillMount(monaco);
        this.editor = monaco.editor.create(
            containerElement,
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
        if (typeof this.editor !== "undefined") {
            this.editor.dispose();
        }
    }
}
