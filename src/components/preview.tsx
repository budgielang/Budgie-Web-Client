import { observer } from "mobx-react";
import * as React from "react";

import { OptionsBar } from "./preview/optionsbar";
import { OutputArea } from "./preview/outputarea";
import { PreviewStore } from "./previewstore";

/**
 * Properties for a Preview component.
 */
interface IProps {
    /**
     * Store for a Preview component.
     */
    store: PreviewStore;
}

/**
 * A real-time GLS Preview component.
 */
@observer
export class Preview extends React.Component<IProps, void> {
    /**
     * Renders the component.
     * 
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        return (
            <section className="preview">
                <div className="component">
                    <OutputArea store={this.props.store.outputArea} />
                    <OptionsBar store={this.props.store.optionsBar} />
                </div>
        </section>);
    }
}
