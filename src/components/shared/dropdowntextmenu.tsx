import * as React from "react";

/**
 * Props for a DropdownTextMenu component.
 */
export interface IProps {
    /**
     * Default displayed value.
     */
    defaultValue: string;

    /**
     * Callback when the value changes.
     * 
     * @param newValue   The new value.
     */
    onChange(newValue: string): void;

    /**
     * Displayed value options.
     */
    options: string[];
}

/**
 * Component for a dropdown text menu.
 */
export class DropdownTextMenu extends React.Component<IProps, void> {
    /**
     * @returns The rendered component.
     */
    public render(): JSX.Element {
        const options: JSX.Element[] = this.props.options.map(
            (option: string): JSX.Element => <option value={option}>{option}</option>);

        return (
            <select onChange={this.onChange} defaultValue={this.props.defaultValue}>
                {options}
            </select>);
    }

    /**
     * Handles a new value being triggered from the select.
     * 
     * @param event   The triggering event.
     */
    private onChange = (event: React.FormEvent<HTMLSelectElement>): void => {
        this.props.onChange(event.currentTarget.value);
    }
}
