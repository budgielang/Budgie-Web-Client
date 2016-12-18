import { observer } from "mobx-react";
import * as React from "react";

import { IAppProps } from "./app";
import { List as GlsCommandsList } from "./editor/commands/list"
import { OptionsBar } from "./editor/optionsbar";
import { GlsTextArea } from "./editor/glstextarea";

/**
 * Component for an editor.
 */
@observer
export class Editor extends React.Component<IAppProps, void> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <section className="editor">
                <OptionsBar app={this.props.app} />
                <GlsTextArea app={this.props.app} />
                <GlsCommandsList />
            </section>);
    }
}
