import { Command } from "general-language-syntax";
import React from "react";

import { Parameters } from "../parameters";
import "./styles.css";

export type AvailableCommandProps = {
  command: Command;
};

const renderParameterDescription = (parameters: unknown[]) => {
  switch (parameters.length) {
    case 0:
      return "Takes no parameters.";

    case 1:
      return "Takes 1 parameter:";

    case 2:
      return "Takes 2 parameters:";
  }
};

export const AvailableCommand: React.FC<AvailableCommandProps> = ({
  command
}) => {
  const metadata = command.getMetadata();
  return (
    <li className="available-command">
      <h3 className="available-command--name">
        <code>{metadata.name}</code>
      </h3>
      <div className="available-command--description">
        {metadata.description}
        <br />
        <em> {renderParameterDescription(metadata.parameters)}</em>
      </div>
      <Parameters parameters={metadata.parameters} />
    </li>
  );
};
