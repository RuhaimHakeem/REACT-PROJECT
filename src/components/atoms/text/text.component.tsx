import React from "react";

const H1: React.FC = ({ children }) => {
  return <h1>{children}</h1>;
};
const H2: React.FC = ({ children }) => {
  return <h2>{children}</h2>;
};

const P: React.FC = ({ children }) => {
  return <p>{children}</p>;
};

export const Text = { H1, H2, P };
