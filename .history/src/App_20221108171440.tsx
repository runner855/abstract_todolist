import React, { useState, useEffect } from "react";
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

        <button
          onClick={() => {
            setList([...list, value]);
            setValue("");
          }}
        >
          Submit
        </button>
        <div className="todo-container">
          <div className="single-task">{list}</div>
        </div>
      </div>
    </div>
  );
};
