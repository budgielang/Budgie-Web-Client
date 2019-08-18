import React, { ReactNode } from "react";

import "./styles.css";

export type AppScreenProps = {
  children: [ReactNode, ReactNode];
};

export const AppScreen: React.FC<AppScreenProps> = ({
  children: [left, right]
}) => {
  return (
    <main className="app-screen--main">
      <div className="app-screen--left">{left}</div>
      <div className="app-screen--right">{right}</div>
    </main>
  );
};
