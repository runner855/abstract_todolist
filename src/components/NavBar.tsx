import * as React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

export const NavBar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <Link className="item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="item" to="/create-tasks">
              Create Tasks
            </Link>
          </li>
          <li>
            <Link className="item" to="/tasks-list">
              Tasks List
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
