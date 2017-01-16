import * as React from "react";
import { observer } from "mobx-react";

import { AppStore } from "./appstore";
import { Editor } from "./editor";
import { Preview } from "./preview";

/**
 * Properties for an App component.
 */
export interface IAppProps {
    /**
     * Global state for the entire application.
     */
    store: AppStore;
}

/**
 * Component for the entire application.
 */
@observer
export class App extends React.Component<IAppProps, void> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <div className="app">
                <Editor store={this.props.store.editor} />
                <Preview store={this.props.store.preview} />
            </div>);
    }
}
