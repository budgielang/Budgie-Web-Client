import { observer } from "mobx-react";
import * as React from "react";

import { IAppState } from "../state/appstate";
import { List as GlsCommandsList } from "./editor/commands/list"
import { OptionsBar } from "./editor/optionsbar";
import { GlsTextArea } from "./editor/glstextarea";

/**
 * Component for an editor.
 */
@observer
export class Editor extends React.Component<IAppState, void> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <section className="editor">
                <OptionsBar
                    outputLanguage={this.props.outputLanguage}
                    sampleName={this.props.sampleName} />
                <GlsTextArea sourceLines={this.props.sourceLines} />
                <GlsCommandsList />
            </section>);
    }
}
