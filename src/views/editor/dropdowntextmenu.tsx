import { observer } from "mobx-react";
import * as React from "react";

export interface IProps {
    defaultValue: string;
    options: string[];
}

export interface IState {

}

/**
 * 
 */
@observer
export class DropdownTextMenu extends React.Component<IProps, IState> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        const options: JSX.Element[] = this.props.options.map(
            (option: string): JSX.Element => <option value={option}>{option}</option>);

        return (
            <select defaultValue={this.props.defaultValue}>
                {options}
            </select>);
    }
}
