import {
  CommandsBagFactory,
  RenderContext,
  TypeScript
} from "general-language-syntax";
import React from "react";

import { useStoredState } from "../../useStoredState";
import { AvailableCommand } from "./AvailableCommand";
import "./styles.css";

const commandsBag = CommandsBagFactory.forContext(
  new RenderContext(new TypeScript())
);

const commands = commandsBag.getCommands();

export const AvailableCommands: React.FC = () => {
  const [filter, setFilter] = useStoredState("available-commands-filter", "");

  return (
    <div className="available-commands">
      <h2 className="available-commands--heading">Available Commands</h2>
      <ul className="available-commands--list">
        {Object.entries(commands)
          .filter(([commandName]) => commandName.includes(filter))
          .map(([commandName, command]) => (
            <AvailableCommand command={command} key={commandName} />
          ))}
      </ul>
      <div className="available-commands--bottom">
        <input
          className="available-commands--filter"
          onChange={event => setFilter(event.target.value)}
          placeholder="filter commands"
          value={filter}
        />
      </div>
    </div>
  );
};
