import React from "react";
import { Header } from "./Header";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <h1>My Tasks!!</h1>
      <input type="submit" placeholder="Add A New Task"></input>
    </div>
  );
};
