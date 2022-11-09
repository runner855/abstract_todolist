import React, { useState } from "react";
import { Header } from "./Header";
import "./App.css";

export const App = () => {
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  return (
    <div className="App">
      <Header />
      <h1>My Tasks!!</h1>
      <div className="textbox">
        <input
          type="text"
          placeholder="Add A New Task"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        ></input>

        <button onClick={() => console.log("clicked")}>Submit</button>
        <ul className="text">
          <li>{value}</li>
        </ul>
      </div>
    </div>
  );
};
