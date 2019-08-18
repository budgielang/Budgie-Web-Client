import { Command } from "general-language-syntax";
import React from "react";

import { Parameters } from "../parameters";
import "./styles.css";

export type AvailableCommandProps = {
  command: Command;
};

export const AvailableCommand: React.FC<AvailableCommandProps> = ({
  command
}) => {
  const metadata = command.getMetadata();
  return (
    <div className="available-command">
      <h3 className="available-command--name">
        <code>{metadata.name}</code>
      </h3>
      <Parameters parameters={metadata.parameters} />
    </div>
  );
};
