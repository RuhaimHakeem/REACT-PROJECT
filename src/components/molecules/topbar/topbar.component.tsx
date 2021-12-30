import React from "react";
import { Text } from "../../atoms";

export const Topbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Text.H1>The Dojo Blog</Text.H1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
};
