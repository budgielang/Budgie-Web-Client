import * as React from "react";
import { observer } from "mobx-react";

import { IAppState } from "../state/appstate";
import { Editor } from "./editor";
import { Preview } from "./preview";

/**
 * Properties for an App component.
 */
export interface IAppProps {
    /**
     * Global state for the entire application.
     */
    app: IAppState;
}

/**
 * Component for the entire application.
 */
@observer
export class App extends React.Component<IAppState, void> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <div>
                <Editor {...this.props} />
                <Preview
                    outputLanguage={this.props.outputLanguage}
                    sourceLines={this.props.sourceLines} />
            </div>);
    }
}
