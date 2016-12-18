import * as React from "react";
import { observer } from "mobx-react";

import { IAppState } from "../state/appstate";

interface IAppViewProps {
    app: IAppState;
}

@observer
export class AppView extends React.Component<IAppViewProps, void> {
    public render(): JSX.Element {
        return <div>{this.props.app.source}</div>;
    }
}
